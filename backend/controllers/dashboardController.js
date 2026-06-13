import { supabase } from "../config/supabaseClient.js";

export const getDashboardStats = async (
req,
res
) => {

try {


const {
  data: donations,
  error: donationsError
} = await supabase
  .from("donations")
  .select("*");

if (donationsError) {
  throw donationsError;
}

const totalDonations =
  donations.reduce(
    (sum, item) =>
      sum + Number(item.amount || 0),
    0
  );

const activity =
  donations
    .sort(
      (a, b) =>
        new Date(b.created_at) -
        new Date(a.created_at)
    )
    .slice(0, 10)
    .map(item => ({
      id: item.id,
      title:
        `${item.first_name} ${item.last_name} donated UGX ${Number(
          item.amount
        ).toLocaleString()}`,
      created_at:
        item.created_at
    }));

return res.status(200).json({

  success: true,

  stats: {

    donations:
      totalDonations,

    volunteers: 0,

    partners: 0,

    messages: 0

  },

  activity

});


} catch (error) {


console.error(
  "Dashboard Error:",
  error
);

return res.status(500).json({

  success: false,

  message:
    error.message

});


}

};
