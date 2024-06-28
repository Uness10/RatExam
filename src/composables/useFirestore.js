import {projectFirestore} from '@/firebase/config.js';
import {ref} from 'vue'


export async  function fetchEvents() {
  const res = await projectFirestore.collection('Events').get();
  return res.docs.map(doc=> {
    return {...doc.data(),id:doc.id }})
};
export  async function fetchEvent(rId) {
  const rec = ref(null)
  const error = ref(null)
  try {
  let res = await projectFirestore.collection('Events').doc(rId).get()

  if (!res.exists) {
    throw Error('That post does not exist')
  }
    rec.value = res.data()
      console.log(rec.value)
      return rec.value

  }
  catch(err) {
      error.value = err.message
      console.log(error.value);
      return null;
  }

}

export async function updateEventVotes(eventId, userId, vote) {
  const voteRef = projectFirestore.collection('Events').doc(eventId).collection('Votes').doc(userId);

  try {
    const voteDoc = await voteRef.get();
    if (voteDoc.exists) {
      console.error("User has already voted for this event");
      return { success: false, error: "User has already voted for this event" };
    } else {
      await voteRef.set({
        vote : vote.yesVotes ? 1:0,
        createdAt: new Date()
      });

      await projectFirestore.collection('Events').doc(eventId).update(vote);


      return { success: true };
    }
  } catch (e) {
    console.error("Error updating document: ", e);
    return { success: false, error: e.message };
  }
}




