import db from "../../../db/db";

export default async function page() {
  const locations = await db.dB_Location.findMany();
  return (
    <div>
      sdsd
      <div>1123</div>
      {locations &&
        locations.map((loc) => (
          <div key={loc.label}>
            <div>
              <span className="font-bold p-1">{loc.label}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
