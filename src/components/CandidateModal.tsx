import { useEffect, useState } from "react";
import {
  calculatePriority,
  getColor,
  calculateScore
} from "../utils/priority";


export default function CandidateModal(
{
  data,
  onClose,
  onUpdate
}:any
){


const [candidate,setCandidate]=useState<any>(data);



useEffect(()=>{

  setCandidate(data);

},[data]);



if(!candidate) return null;



const changeEvaluation=(key:string,value:number)=>{


const updated={

...candidate,

evaluation:{

...candidate.evaluation,

[key]:value

}

};


const assignmentAvg =
(
updated.evaluation.uiQuality+
updated.evaluation.componentStructure+
updated.evaluation.stateHandling+
updated.evaluation.edgeCase+
updated.evaluation.responsiveness+
updated.evaluation.accessibility
)/6;



const videoAvg =
(
updated.evaluation.clarity+
updated.evaluation.confidence+
updated.evaluation.architecture+
updated.evaluation.tradeoff+
updated.evaluation.videoCommunication
)/5;



setCandidate({

...updated,

assignment:Math.round(
(updated.assignment + assignmentAvg*20)/2
),

video:Math.round(
(updated.video + videoAvg*20)/2
)

});


};




const priority=calculatePriority(candidate);



return(

<div className="overlay">


<div className="modal">


<button
className="close"
onClick={onClose}
>
✕
</button>



<h2>
{candidate.name}
</h2>


<p>
College: <b>{candidate.college}</b>
</p>



<h3>
Candidate Scores
</h3>


<div className="scores">


<p>
Assignment: {candidate.assignment}%
</p>


<p>
Video: {candidate.video}%
</p>


<p>
ATS: {candidate.ats}%
</p>


<p>
GitHub: {candidate.github}%
</p>


<p>
Communication: {candidate.communication}%
</p>


<p>
Priority Score: {calculateScore(candidate)}
</p>


</div>



<h3>
Priority
</h3>


<span

className="badge"

style={{
background:getColor(priority)
}}

>

{priority}

</span>




<h3>
Assignment Evaluation
</h3>


{

[

["uiQuality","UI Quality"],

["componentStructure","Component Structure"],

["stateHandling","State Handling"],

["edgeCase","Edge Case Handling"],

["responsiveness","Responsiveness"],

["accessibility","Accessibility"]

].map(([key,label])=>(


<div className="slider" key={key}>


<label>

{label}: {candidate.evaluation[key]}

</label>


<input

type="range"

min="1"

max="5"

value={candidate.evaluation[key]}

onChange={
e=>
changeEvaluation(
key,
Number(e.target.value)
)
}

/>


</div>


))

}




<h3>
Video Evaluation
</h3>


{

[

["clarity","Clarity"],

["confidence","Confidence"],

["architecture","Architecture Explanation"],

["tradeoff","Tradeoff Reasoning"],

["videoCommunication","Communication Strength"]

].map(([key,label])=>(


<div className="slider" key={key}>


<label>

{label}: {candidate.evaluation[key]}

</label>


<input

type="range"

min="1"

max="5"

value={candidate.evaluation[key]}

onChange={
e=>
changeEvaluation(
key,
Number(e.target.value)
)
}

/>


</div>


))

}




<button

className="save"

onClick={()=>{


onUpdate({

...candidate,

status:"reviewed"

});


onClose();


}}

>

Save Evaluation

</button>



</div>


</div>


)

}