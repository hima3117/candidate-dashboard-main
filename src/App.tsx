import {useState} from "react";

import {generateCandidates} from "./utils/mockData";

import {calculatePriority} from "./utils/priority";

import CandidateList from "./components/CandidateList";

import CandidateModal from "./components/CandidateModal";

import Comparison from "./components/Comparison";

import Summary from "./components/Summary";

import DashboardHeader from "./components/DashboardHeader";


function App(){


const [data,setData]=useState(generateCandidates());

const [selected,setSelected]=useState<any>(null);


const [compare,setCompare]=useState<any[]>([]);


const [search,setSearch]=useState("");

const [status,setStatus]=useState("all");


const [sort,setSort]=useState("none");


const [minAssignment,setMinAssignment]=useState(0);

const [minVideo,setMinVideo]=useState(0);

const [minATS,setMinATS]=useState(0);



const updatedData=data.map(c=>({

...c,

priority:calculatePriority(c)

}));



let filtered=updatedData.filter(c=>{


return(

c.name
.toLowerCase()
.includes(search.toLowerCase())


&&

c.assignment>=minAssignment

&&

c.video>=minVideo

&&

c.ats>=minATS


&&

(
status==="all"
||
c.status===status
)

)

});



if(sort==="priority"){

const order:any={
P0:4,
P1:3,
P2:2,
P3:1
};


filtered.sort(
(a,b)=>order[b.priority]-order[a.priority]
);

}



if(sort==="assignment"){

filtered.sort(
(a,b)=>b.assignment-a.assignment
);

}




function updateCandidate(updated:any){


setData(prev=>

prev.map(c=>

c.id===updated.id
?
updated
:
c

)

)


}




return(


<div className="container">


<DashboardHeader/>


<Summary data={updatedData}/>



<div className="controls">


<input

placeholder="Search Candidate"

onChange={
e=>setSearch(e.target.value)
}

/>



<input

type="number"

placeholder="Assignment Min"

onChange={
e=>setMinAssignment(
Number(e.target.value)
)
}

/>



<input

type="number"

placeholder="Video Min"

onChange={
e=>setMinVideo(
Number(e.target.value)
)
}

/>



<input

type="number"

placeholder="ATS Min"

onChange={
e=>setMinATS(
Number(e.target.value)
)
}

/>



<select
onChange={
e=>setStatus(e.target.value)
}
>

<option value="all">
All Status
</option>


<option value="reviewed">
Reviewed
</option>


<option value="pending">
Pending
</option>


</select>




<select

onChange={
e=>setSort(e.target.value)
}

>


<option value="none">
Sort
</option>


<option value="priority">
Priority
</option>


<option value="assignment">
Assignment Score
</option>


</select>


</div>




<CandidateList

data={filtered}

onSelect={setSelected}

compare={compare}

setCompare={setCompare}

/>




<CandidateModal

data={selected}

onClose={()=>setSelected(null)}

onUpdate={updateCandidate}

/>




<Comparison

selected={compare}

onRemove={()=>setCompare([])}

/>



</div>


)

}


export default App;