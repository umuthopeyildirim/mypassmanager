import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updateProfile,
    updateEmail,
    signOut,
    deleteUser,
    updatePassword
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    updateDoc,
    setDoc,
    doc
} from "firebase/firestore";
import { 
    app
} from "./FirebaseConfig";

// Initialize Firebase Auth and Firestore for Auth process
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                photoURL: user.photoURL,
                createdAt: new Date()
            });
            let passwords= [
                {
                    url: "https://mypassmanager.ml",
                    password: "Regitered with Google",
                    email: user.email,
                    name: "MyPassManager",
                }
            ]
            setDoc(doc(db, "passwords", user.uid), {
                passwords
            }, { merge: true });
            return true;
        }
    } 
    catch (err) {
        return false;
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        return false;
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            displayName: name,
            authProvider: "email",
            email: user.email,
            createdAt: new Date(),
            photoURL: "https://firebasestorage.googleapis.com/v0/b/mypassmanager-web.appspot.com/o/blank-profile-picture.webp?alt=media&token=033e7a31-e442-4619-a16c-6d09f6cbd6e9"
        });
        let passwords= [
            {
                url: "https://mypassmanager.ml",
                password: password,
                email: email,
                name: "MyPassManager",
            }
        ]
        setDoc(doc(db, "passwords", user.uid), {
            passwords
        }, { merge: true });
        await updateProfile(user, {
            displayName: name,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/mypassmanager-web.appspot.com/o/blank-profile-picture.webp?alt=media&token=033e7a31-e442-4619-a16c-6d09f6cbd6e9"
        });
        sendEmailVerification(auth.currentUser)
        return true;
    }
    catch (err) {
        return false;
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    }
    catch (err) {
        return false;
    }
}

const logout = () => {
    try {
        signOut(auth);
        return true;
    }
    catch (err) {
        return false;
    }
};

const updateEmailFromUser = async (email) => {
    console.log(email);
    try {
        await updateEmail(auth.currentUser, email)
        .then(() => {
            // Edit user's email in Firestore
            const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
            getDocs(q).then((docs) => {
                docs.forEach((doc) => {
                    updateDoc(doc.ref, {
                        email: email
                    });
                });
            });
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const deleteUserFromProfile = async () => {
    try {
        await deleteUser(auth.currentUser)
        .catch((err) => {
            logout();
        });
        return true;
    } catch (err) {
        console.log(err);
        logout();
        return false;
    }
};

const updatePasswordFromUser = async (password) => {
    try {
        await updatePassword(auth.currentUser, password)
        .catch((err) => {
            console.log(err);
            logout();
            return false;
        });
        return true;
    } catch (err) {
        logout();
        console.log(err);
        return false;
    }
};

export {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    updateEmailFromUser,
    deleteUserFromProfile,
    updatePasswordFromUser
};