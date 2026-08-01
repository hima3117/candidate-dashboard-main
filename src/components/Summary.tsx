type Props = {
  data: any[];
};


export default function Summary({ data }: Props) {


  const reviewed =
    data.filter(c => c.status === "reviewed").length;


  const shortlisted =
    data.filter(
      c =>
        c.priority === "P0" ||
        c.priority === "P1"
    ).length;


  const pending =
    data.filter(c => c.status === "pending").length;



  return (

    <div className="summary">


      <div className="box">
        <div className="icon">👥</div>
        <h3>Total Candidates</h3>
        <h2>{data.length}</h2>
      </div>


      <div className="box">
        <div className="icon">✅</div>
        <h3>Reviewed</h3>
        <h2>{reviewed}</h2>
      </div>


      <div className="box">
        <div className="icon">⭐</div>
        <h3>Shortlisted</h3>
        <h2>{shortlisted}</h2>
      </div>


      <div className="box">
        <div className="icon">⏳</div>
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>


    </div>

  );
}