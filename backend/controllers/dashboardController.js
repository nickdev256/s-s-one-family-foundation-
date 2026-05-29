import { supabase } from "../config/supabase.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      donationsResult,
      volunteersResult,
      partnersResult,
      contactsResult,
      activityResult
    ] = await Promise.all([
      supabase.from("donations").select("amount"),
      supabase.from("volunteers").select("id"),
      supabase.from("partners").select("id"),
      supabase.from("contacts").select("id"),
      supabase
        .from("activity_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10)
    ]);

    if (donationsResult.error) throw donationsResult.error;
    if (volunteersResult.error) throw volunteersResult.error;
    if (partnersResult.error) throw partnersResult.error;
    if (contactsResult.error) throw contactsResult.error;
    if (activityResult.error) throw activityResult.error;

    const totalDonations =
      donationsResult.data.reduce(
        (sum, donation) => sum + Number(donation.amount || 0),
        0
      );

    res.status(200).json({
      success: true,

      stats: {
        donations: totalDonations,
        volunteers: volunteersResult.data.length,
        partners: partnersResult.data.length,
        messages: contactsResult.data.length
      },

      activity: activityResult.data
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};