import {calculatePriority,getColor} from "../utils/priority";


export default function Comparison(
{
selected,
onRemove
}:any
){

if(selected.length<2)
return null;


return(

<div className="comparison">

<h2>
Candidate Comparison
</h2>


<table className="table">

<thead>

<tr>

<th>Metric</th>

{
selected.map((c:any)=>(

<th key={c.id}>
{c.name}
</th>

))

}

</tr>

</thead>


<tbody>

<tr>
<td>Assignment</td>
{
selected.map((c:any)=>
<td key={c.id}>{c.assignment}%</td>
)
}
</tr>


<tr>
<td>Video</td>
{
selected.map((c:any)=>
<td key={c.id}>{c.video}%</td>
)
}
</tr>


<tr>
<td>ATS</td>
{
selected.map((c:any)=>
<td key={c.id}>{c.ats}%</td>
)
}
</tr>


<tr>

<td>Priority</td>

{
selected.map((c:any)=>{

const p=calculatePriority(c);

return(

<td key={c.id}>

<span

className="badge"

style={{
background:getColor(p)
}}

>

{p}

</span>


</td>

)

})

}

</tr>


</tbody>

</table>


<button
className="save"
onClick={onRemove}
>
Close
</button>


</div>

)

}