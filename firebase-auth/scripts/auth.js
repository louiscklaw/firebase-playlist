
// listen for auth status change
auth.onAuthStateChanged( user => {
  // user login get user
  // user logout get null

    if(user){
      // console.log('user logged in: ', user)

      // show users the record
      db.collection('guides').onSnapshot((snapshot) => {
        setupGuides(snapshot.docs)
        setupUI(user)
      }, err => {
        console.log('error found on guides')
      })
    }else{
      // match /guides/{guideId} {
    	//   allow read, write: if request.auth.uid != null
      // }
      setupGuides([])
      setupUI()
    }

} )

// create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit',(e) => {
  e.preventDefault();
  db.collection('guides')
    .add({
      title: createForm['title'].value ,
      content:createForm['content'].value
    }).then(() => {
      // close the modal and reset form
      const modal = document.querySelector("#modal-create")
      M.Modal.getInstance(modal).close();
      createForm.reset();
    }).catch((err) => {
      console.log(err.message)
    })

})

// signup
const signupForm = document.querySelector( '#signup-form' );

signupForm.addEventListener( 'submit', ( e ) => {
  e.preventDefault();

  const email = signupForm[ 'signup-email' ].value;
  const password = signupForm[ 'signup-password' ].value;

  auth.createUserWithEmailAndPassword( email, password ).then( cred => {
    const modal = document.querySelector( '#modal-signup' );
    M.Modal.getInstance( modal ).close();
    signupForm.reset();
  } );
} );

// logout
const logout = document.querySelector( '#logout' )
logout.addEventListener( 'click', ( e ) => {
  e.preventDefault();
  auth.signOut()
} )

// login
const loginForm = document.querySelector( '#login-form' )
loginForm.addEventListener( 'submit', ( e ) => {
  e.preventDefault();

  const email = loginForm[ 'login-email' ].value;
  const password = loginForm[ 'login-password' ].value;

  auth.signInWithEmailAndPassword( email, password ).then( ( cred ) => {
    const modal = document.querySelector( '#modal-login' )
    M.Modal.getInstance( modal ).close()
    loginForm.reset()
  } )
} )
