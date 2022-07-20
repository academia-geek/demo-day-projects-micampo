import { getAuth } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../firebase/firebaseConfig';
import { updatePhotoAction } from '../app/actions/user.actions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Prueba = ({ user }) => {
   const auth = getAuth();
   const dispatch = useDispatch();
   const [imageSrc, setImageSrc] = useState('');
   const [uploadData, setUploadData] = useState('');
   const [photo, setPhoto] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const userPhoto = useSelector((state) => state.user.photoURL);

   const handleUpload = async (e, file, currentUser) => {
      e.preventDefault();
      const fileRef = ref(storage, `profilePhotos/${currentUser.uid}.jpg`);
      setIsLoading(true);
      const snapshot = await uploadBytes(fileRef, file);
      const newPhotURL = await getDownloadURL(fileRef);
      dispatch(updatePhotoAction(user, newPhotURL));

      setIsLoading(false);
   };

   const handleOnChangeImage = (e) => {
      const reader = new FileReader();
      reader.onload = (event) => {
         setImageSrc(event.target.result);
         setUploadData(undefined);
      };
      reader.readAsDataURL(e.target.files[0]);

      if (e.target.files[0]) {
         setPhoto(e.target.files[0]);
      }
   };

   const handleOnClick = (e) => {
      e.preventDefault();
      handleUpload(e, photo, auth.currentUser);
   };

   useEffect(() => {
      if (userPhoto) {
         setImageSrc(userPhoto);
      }
   }, [userPhoto]);

   if (isLoading) {
      return <Spinner variant='dark' animation='border' />;
   }

   return (
      <>
         <form
            method='post'
            onChange={handleOnChangeImage}
            onSubmit={handleOnClick}>
            <div>
               <label htmlFor="file" className='upload-new-photo-button'>
                  <AddPhotoAlternateIcon />
               </label>
               <input
                  type='file'
                  name='file'
                  accept='image/*'
                  id='file'
                  style={{ display: 'none' }}
                  required
               />
            </div>

            <img style={{ width: '100px' }} src={imageSrc} />

            {imageSrc && !uploadData && (
               <p>
                  <button
                     type='submit'
                     className='save-photo-button'
                  >Guardar</button>
               </p>
            )}

            {uploadData && (
               <code>
                  <pre>{JSON.stringify(uploadData, null, 2)}</pre>
               </code>
            )}
         </form>
      </>
   );
};

export default Prueba;
