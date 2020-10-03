firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
   window.location.href = '/';
  }
})

async function handleLogout(event) {
  try {
      await firebase.auth().signOut()
      // document.querySelector(".logout").classList.push("hidden")
  } catch (error) {
      alert(error)
  }
}

document.querySelector(".logout").addEventListener("click", handleLogout)