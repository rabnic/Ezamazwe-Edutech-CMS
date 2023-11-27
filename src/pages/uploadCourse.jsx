import React, { useEffect } from 'react'
import { useState } from 'react';
import { database, getCategoryData, storage } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import EditForm from './editForm';


export default function UploaCourse() {
  const [shortDescription, setShortDescription] = useState("")
  const [fullDescription, setFullDescription] = useState("")
  const [name, setName] = useState("")
  const [instructor, setInstructor] = useState("")
  const [videos, setVideos] = useState([])
  const [title, setTitle] = useState("")
  const [subscription, setSubscription] = useState("")
  const [category, setCatagory] = useState([])
  const [type, setType] = useState("")
  const [grade, setGrade] = useState("")
  const [topic, setTopic] = useState("")
  const [learningOutcomes, setLearningOutcomes] = useState("")
  const [courseTitle, setCourseTitle] = useState("")
  const [courseAuthor, setCourseAuthor] = useState("")
  const [whatYouLearn, setwhatYouLearn] = useState("")


  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedGrade, setSelectedGrade] = useState()
  const [selectedSubject, setSelectedSubject] = useState()


  const [moduleDescription, setModuleDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState([])
  const [showVid, setShowVid] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState();
  const [showEditForm, setShowEditForm] = useState(false)

  const [categories, setCategories] = useState()

  useEffect(() => {
    const category = async () => {
      await getCategoryData().then(data => {
        setCategories(data)
      })
    }
    category()
  }, [])

  const categoryNames = () => {
    return Object.keys(categories).map(key => {
      return { [key]: categories[key].name }

    })
  }

  // const getkeyValue = Object.entries(categoryNames())
  // const getkeyValue1 = Object.entries(categoryNames())

  // console.log(getkeyValue);

  console.log('categoryNames')
  if (categories) {
    console.log(categoryNames())
  }

  // const grades = (key) => {
  //   return categories[key].grades
  // }

  const grades = (key) => {
    return categories[key]?.grades || [];
  };

  console.log('grades')
  if (categories) {
    console.log(grades("caps"))
  }

  // const subjects = (key, grade) => {
  //   return categories[key].subjects[grade]
  // }

  const subjects = (key, grade) => {
    if (categories[key] && categories[key].subjects && categories[key].subjects[grade]) {
      return categories[key].subjects[grade];
    }
    return [];
  };

  console.log('subjects')
  if (categories) {
    console.log(subjects("caps", "Grade_1"))
  }


  // const handleFileChange = (event) => {
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     const content = event.target.files[i]
  //     setVideos((prevState => [...prevState, content]))
  //   }
  // };

  // const handleFileChange = (event) => {
  //   for (let i = 0;  i < event.target.files.length; i++) {
  //     const content = event.target.files[i];
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       const videoURL = reader.result;
  //       setVideoUrl((prevState) => [...prevState, videoURL]);
  //     });
  //     reader.readAsDataURL(content);
  //   }

  // };

  useEffect(() => {
    // Retrieve existing videos from local storage
    const storedVideos = localStorage.getItem("videos");
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  const handleAddVideos = (selectedVideos) => {
    // Merge the selected videos with the existing array
    const updatedVideos = [...videos, ...selectedVideos];
    setVideos(updatedVideos);

    // Store the updated array in local storage
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };



  const videoUpload = async () => {

    const videoUrl = await Promise.all(videos.map(async (video) => {
      const videosPath = `videos/${video.name + v4()}`
      const videoStorageRef = ref(storage, videosPath);
      await uploadBytes(videoStorageRef, video)
      const url = await getDownloadURL(videoStorageRef)
      return { video: video.name, url }

    }))

  }


  const handleFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const content = e.target.files[i];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const videoURL = reader.result;
        const videoTitle = content.name;
        const videoInfo = {
          url: videoURL,
          title: videoTitle,
          // Add other information you want to include, such as description, tags, etc.


        };
        setVideoUrl((prevState) => [...prevState, videoInfo]);

      });
      reader.readAsDataURL(content);
      console.log(content);
    }
  };





  const uploadCourse = async () => {

    // const videoUrl = await Promise.all(videos.map(async (video) => {
    //   const videosPath = `videos/${video.name + v4()}`
    //   const videoStorageRef = ref(storage, videosPath);
    //   await uploadBytes(videoStorageRef, video)
    //   const url = await getDownloadURL(videoStorageRef)
    //   return { video: video.name, url }

    // }))

    try {
      await addDoc(collection(database, 'Courses'), {
        courseName: name,
        courseType: subscription,
        shortdescription: shortDescription,

        courseCategory:
        {
          categoryType: type,
          categoryGrade: grade,
          categoryTopic: topic
        }
        ,

        fullDescription: fullDescription,


        CourseOutcomes: learningOutcomes,
        uploadDate: new Date,
        CoursePrice: "0",
        // CourseType: instructor,


        // setCatagory(courseCategory)
        // modules: [
        //   {
        //     module1: {
        //       title: title,
        //       moduleDescription: moduleDescription,
        //       content: videoUrl.map((video) => video.video),
        //       contentUrl: videoUrl.map((video) => video.url)
        //     }

        //   },
        // ],
      })
        .then((doc) => {
          const docId = doc.id;
          courseContent.map((doc) => {
            uploadBytes(storageRef, doc.video).then(() => {


              // Get download URL
              getDownloadURL(storageRef)

                .then(async (url) => {

                  const videoUrl = await Promise.all(videos.map(async (video) => {
                    const videosPath = `videos/${video.name + v4()}`
                    const videoStorageRef = ref(storage, videosPath);
                    await uploadBytes(videoStorageRef, video)
                    const url = await getDownloadURL(videoStorageRef)
                    return { video: video.name, url }

                  }))
                  // Save data to Firestore
                  await addDoc(collection(database, "courseContent", docId), {
                    lessonName: lessonName,
                    lessonType: lessonType,
                    lessonLinks: lessonLinks,
                    lessonDocuments: [{
                      lessonDocs: {
                        docName: docName,
                        docUrl: docUrl
                      }
                    }],
                    LessonNumber: lessonNumber,
                    lessonUrl: url
                  });
                })
            })
              .catch((error) => {
                console.error(error);
              }).then(async () => {
                // setRecordings([]);
                // setIsLoading(false);
                // navigation.navigate("Journals")
              })
          })
        });


      console.log("Success");

      alert("Content successfully uploaded")
    } catch (error) {
      console.error("Error uploading video:", error);
    }

    console.log("clicked");
  };


  function showVideo(videoUrl) {
    console.log(videoUrl);
    setShowVid(true)
    setSelectedVideoUrl(videoUrl)
  }

  function showEdit() {
    setShowEditForm(true)
  }


  const addVideos = () => {



  }



  return (

    <div className="App">


      <label>Course Name:</label>
      <input placeholder='Course Name...' onChange={(e) => setName(e.target.value)} />
      {/* <input placeholder='Enter name of the instructor...' onChange={(e) => setInstructor(e.target.value)} />*/}

      <br /><br />
      <label>Select type free or paid:</label>

      <select
        value={subscription}
        onChange={e => setSubscription(e.target.value)}>
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>

      <br /><br />
      <label>Short Description:</label>
      <textarea placeholder='Short description...' onChange={(e) => setShortDescription(e.target.value)} />

      <br /><br />
      {/* <label>Catagory:</label>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}>
        {
          categories &&
          categoryNames().map(value => {
            console.log(value);
            const entries = Object.entries(value)
            console.log(entries[0]);
            return (
              <option key={1} value={value}> {`${entries[0].toString()}`} </option>
            )

          })
        }

        {/* <option value="IBE">IBE</option>{`${key}: ${entries}`}{`${key}: ${entries}`} */}
      {/* // <option value="Entrepreneur">Entrepreneur</option> 

      </select> */}

      <label>Category:</label>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {categories &&
          Object.entries(categories).map(([key, value]) => {
            const categoryField = value.value; // Replace 'field' with the specific field name you want to target
            return (
              <option key={key} value={categoryField}>
                {key}
              </option>
            );
          })}
      </select>

      {/* <label>Category:</label>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >

        {Object.entries({ caps: "CAPS", IEB: "IEB" }).map(([key, value]) => (
          <option key={key} value={value}>
            {`${value}`}
          </option>
        ))}
      </select> */}

      <br /><br />
      <label>grade:</label>
      <select
        value={selectedGrade}
        onChange={(e) => setSelectedGrade(e.target.value)}
      >
        <option value="">Select Category</option>
        {selectedCategory && grades(selectedCategory).map((value, index) => {
          console.log("line 376 grades", value);
          // const categoryField = value.value;
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>

      <br /><br />
        <label>Topic:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {selectedCategory &&
            selectedGrade &&
            subjects(selectedCategory, selectedGrade).map((value, index) => {
              console.log("line 376 subjects", value);
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
     

      <br /><br />
      <label>Full Description:</label>
      <textarea placeholder='Full description...' onChange={(e) => setFullDescription(e.target.value)} />

      <br /><br />

      {/* <textarea placeholder='Enter module description...' onChange={(e) => setModuleDescription(e.target.value)} /> */}
      <input placeholder='Enter title...' onChange={(e) => setTitle(e.target.value)} />
      <br />
      <input type="file" accept="video/*" multiple onChange={handleFileChange} />
      <br /><br /><br />


      <button onClick={uploadCourse}>Upload Course</button>
      <button onClick={handleAddVideos}>Upload Videos</button>


      {showVid && <video controls src={selectedVideoUrl.url} width="40%" />}

      {videoUrl.map((data, index) => (

        <div key={index}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={require("../assets/white.jpg")} width="10%" onClick={() => showVideo(data)} />
            <div>
              <p>Tittle:{data.title}</p>
              <button onClick={showEdit}>Edit</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      {showEditForm && <EditForm />}
    </div>
  )
}