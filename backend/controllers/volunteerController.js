import { supabase } from "../config/supabase.js";

export const getVolunteers = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("volunteers")
      .select("*")
      .order("created_at", {
        ascending: false
      });

    if (error) throw error;

    res.status(200).json({
      success: true,
      volunteers: data
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const updateVolunteerStatus = async (req, res) => {
  try {

    const { id } = req.params;

    const { status } = req.body;

    const { data, error } = await supabase
      .from("volunteers")
      .update({
        status
      })
      .eq("id", id)
      .select();

    if (error) throw error;

    await supabase
      .from("activity_logs")
      .insert([
        {
          title: `Volunteer ${status}`
        }
      ]);

    res.status(200).json({
      success: true,
      volunteer: data[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const createVolunteer = async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      program
    } = req.body;

    const { data, error } = await supabase
      .from("volunteers")
      .insert([
        {
          name,
          email,
          phone,
          program,
          status: "Pending"
        }
      ])
      .select();

    if (error) throw error;

    await supabase
      .from("activity_logs")
      .insert([
        {
          title: `New volunteer application from ${name}`
        }
      ]);

    res.status(201).json({
      success: true,
      volunteer: data[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};