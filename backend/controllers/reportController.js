import { supabase } from "../config/supabaseClient.js";

export const getReports = async (req, res) => {
  try {

    const [
      donations,
      volunteers,
      partners,
      programs
    ] = await Promise.all([
      supabase.from("donations").select("amount"),
      supabase.from("volunteers").select("id"),
      supabase.from("partners").select("id"),
      supabase.from("programs").select("id")
    ]);

    const donationTotal =
      donations.data?.reduce(
        (sum, item) =>
          sum + Number(item.amount || 0),
        0
      ) || 0;

    res.status(200).json({
      success: true,

      reports: {
        donations: donationTotal,
        volunteers:
          volunteers.data?.length || 0,

        programs:
          programs.data?.length || 0,

        partners:
          partners.data?.length || 0
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};