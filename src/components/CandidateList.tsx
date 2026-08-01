import {calculatePriority,getColor,calculateScore} from "../utils/priority";


export default function CandidateList(
{
data,
onSelect,
compare,
setCompare
}:any
){


return(

<table className="table">

<thead>

<tr>

<th>Compare</th>
<th>Name</th>
<th>College</th>
<th>Assignment</th>
<th>Video</th>
<th>ATS</th>
<th>Priority</th>
<th>Score</th>

</tr>

</thead>


<tbody>


{
data.map((c:any)=>{

const p=calculatePriority(c);


return(

<tr key={c.id}>


<td>

<input

type="checkbox"

checked={
compare?.some((x:any)=>x.id===c.id)
}

onChange={(e)=>{


if(e.target.checked){

if(compare.length<3)

setCompare([
...compare,
c
])

}
else{

setCompare(
compare.filter(
(x:any)=>x.id!==c.id
)
)

}


}}

/>

</td>



<td
onClick={()=>onSelect(c)}
className="row"
>

<b>
{c.name}
</b>

</td>



<td>
{c.college}
</td>



<td>
{c.assignment}%
</td>


<td>
{c.video}%
</td>


<td>
{c.ats}%
</td>



<td>

<span

className="badge"

style={{
background:getColor(p)
}}

>

{p}

</span>

</td>


<td>
{calculateScore(c)}
</td>


</tr>

)


})

}


</tbody>


</table>

)

}