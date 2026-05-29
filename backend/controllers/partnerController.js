import { supabase } from "../config/supabase.js";

export const getPartners = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("partners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json({
      success: true,
      partners: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updatePartnerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from("partners")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) throw error;

    await supabase.from("activity_logs").insert([
      {
        title: `Partner ${status}`
      }
    ]);

    res.json({
      success: true,
      partner: data[0]
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const createPartnerRequest = async (req, res) => {
  try {
    const {
      organization,
      contact,
      email,
      phone,
      type
    } = req.body;

    const { data, error } = await supabase
      .from("partners")
      .insert([
        {
          organization,
          contact,
          email,
          phone,
          type
        }
      ])
      .select();

    if (error) throw error;

    await supabase.from("activity_logs").insert([
      {
        title: `New partner request from ${organization}`
      }
    ]);

    res.status(201).json({
      success: true,
      partner: data[0]
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};