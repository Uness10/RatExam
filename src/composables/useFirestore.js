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
  const eventRef = projectFirestore.collection('Events').doc(eventId);

  try {
    const eventDoc = await eventRef.get();
    if (eventDoc.exists) {
      const eventData = eventDoc.data();

        const newVote = { userId: userId, vote : vote.yesVotes ? 1 : 0 };
        await eventRef.update({
          votes: [...(eventData.votes || []), newVote]
        });
        return { success: true };
      
    } else {
      console.error("Event does not exist");
      return { success: false, error: "Event does not exist" };
    }
  } catch (e) {
    console.error("Error updating document: ", e);
    return { success: false, error: e.message };
  }
}




