
// ======================

// function SegmentPopup({ onClose }) {
//   const [segmentName, setSegmentName] = useState('');
//   const [selectedSchemas, setSelectedSchemas] = useState([]);
//   const [availableOptions, setAvailableOptions] = useState(options);

//   const addSchema = (schema) => {
//     setSelectedSchemas([...selectedSchemas, schema]);
//     setAvailableOptions(availableOptions.filter(opt => opt.value !== schema));
//   };

//   const handleSave = () => {
//     const data = {
//       segment_name: segmentName,
//       schema: selectedSchemas.map(schema => ({ [schema]: options.find(opt => opt.value === schema).label }))
//     };

//     fetch('https://webhook.site/your-webhook-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     }).then(response => {
//       if (response.ok) {
//         alert('Segment saved successfully!');
//         onClose();
//       }
//     });
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <h2>Save Segment</h2>
//         <input
//           type="text"
//           placeholder="Segment Name"
//           value={segmentName}
//           onChange={(e) => setSegmentName(e.target.value)}
//         />
//         <div>
//           <select onChange={(e) => addSchema(e.target.value)}>
//             <option value="">Add schema to segment</option>
//             {availableOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//           <button onClick={() => addSchema()}>+ Add new schema</button>
//         </div>
//         <div className="selected-schemas">
//           {selectedSchemas.map((schema, index) => (
//             <div key={index}>
//               <select
//                 value={schema}
//                 onChange={(e) => {
//                   const newSchema = e.target.value;
//                   const newSelectedSchemas = [...selectedSchemas];
//                   newSelectedSchemas[index] = newSchema;
//                   setSelectedSchemas(newSelectedSchemas);
//                   setAvailableOptions(options.filter(opt => !newSelectedSchemas.includes(opt.value)));
//                 }}
//               >
//                 {options.filter(opt => !selectedSchemas.includes(opt.value)).map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ))}
//         </div>
//         <button onClick={handleSave}>Save segment</button>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }
// ===================
import Segment from "./Segment"; 
import { useState } from "react"; 

const options = [
  { label: 'First Name', value: 'first_name' },
  { label: 'Last Name', value: 'last_name' },
  { label: 'Gender', value: 'gender' },
  { label: 'Age', value: 'age' },
  { label: 'Account Name', value: 'account_name' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' },
];
let Index=({ onClose })=>{


  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(options);
     
 const addSchema = (schema) => {
  setSelectedSchemas([...selectedSchemas, schema]);
  setAvailableOptions(availableOptions.filter(opt => opt.value !== schema));
};
    
  
    const handleRemoveSchema = (index) => {
          const updatedSchemaItems = [...availableOptions];
          updatedSchemaItems[index].visible = false;
          setAvailableOptions(updatedSchemaItems);
        };
    const handleSave = () => {
      const data = {
        segment_name: segmentName,
        schema: selectedSchemas.map(schema => ({ [schema]: options.find(opt => opt.value === schema).label }))
      }
      fetch('https://webhook.site/your-webhook-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => {
        if (response.ok) {
          alert('Segment saved successfully!');
          onClose();
        }
      });
    };
    return (

        <div id="container">
        {/* ============= */}
             <div className="button">
                <button type="button" class="btn btn-outline-secondary" onClick={Segment}>Save Segment</button>
             </div>

{/* ================= */}
        <div id="segment-page">
        {/* ============== */}
               <nav>
                    <div id="head">
                     <i class="fa-solid fa-chevron-left" ></i>
                     <span id="head-text">Saving Segment</span>
                     </div>
               </nav>
{/* ========================= */}
              <header>
                    <div id="headg">
                      <label id="name" for="name-segment">Enter the Name of the Segment</label>
                      <input placeholder="Enter Name of the segment" id="name-segment"  value={segmentName}
                            onChange={e => setSegmentName(e.target.value)}></input>
                      <span id="text">To save your segment, you need to add the schemas to build the query.</span>
                    </div>
              </header>
              {/* ============= */}
              <div id="info">
                 <div id="info-in">
                     <div id="green-sec">
                         <span id="green"></span>
                         <span>User Traits</span>
                     </div>
                     <div id="red-sec">
                         <span id="red"></span>
                         <span>Group Traits</span>
                      </div>
                </div>
              </div>
{/* ========================================== */}
              <div id="add-container">
                  <div id="gray-box">
                     {
                      availableOptions.map((item,index)=>{
                        return(
                         <div className="list" id={item.label}  key={index}>
                         <span className="circle"></span>
                         <select><option value= 'first_name' id="first_name" >{item.availableOptions}</option> </select>
                        <button className="minus" onClick={handleRemoveSchema}> 
                             <i class="fa-solid fa-minus"></i>   </button>
                        </div> )})
                        }

                        {selectedSchemas.map((schema, index) => (
            <div key={index}>
              <select
                value={schema}
                onChange={(e) => {
                  const newSchema = e.target.value;
                  const newSelectedSchemas = [...selectedSchemas];
                  newSelectedSchemas[index] = newSchema;
                  setSelectedSchemas(newSelectedSchemas);
                  setAvailableOptions(options.filter(opt => !newSelectedSchemas.includes(opt.value)));
                }}
              >
                {options.filter(opt => !selectedSchemas.includes(opt.value)).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
                  </div>

                  <div id="add-schema">
                  <select  onChange={(e) => addSchema(e.target.value) } >
          <option value="" >Add schema to segment</option>
          {availableOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
                   </div>
{/* <select onChange={(e) => addSchema(e.target.value)}>
            <option value="">Add schema to segment</option>
            {availableOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
              </div>
<br></br>
{/* ============================================================================ */}
              <span id="new-schema" onClick={addSchema}>+Add new Schema</span>

              <footer>
             

              <button type="button" class="btn btn-secondary btn-lg footer-btn"  onClick={handleSave}> Save the Segment</button>
              <button type="button" class="btn btn-light btn-lg footer-btn" disabled onClick={onClose}>cancel</button>
          
              </footer>
        </div>
        </div>
    )
}

export default Index;
// ==================================================================================================================================
// import { useState } from "react";
// let Index=()=>{
  
//   const initialSchemaItems = [
//     { label: 'First Name', value: '', visible: true },
//     { label: 'Last Name', value: '', visible: false },
//     { label: 'Gender', value: '', visible: false },
//     { label: 'Age', value: '', visible: false },
//     { label: 'Account Name', value: '', visible: false },
//     { label: 'City', value: '', visible: false },
//     { label: 'State', value: '', visible: false },
//   ];

// const [showPopup, setShowPopup] = useState(false);
//   const [segmentName, setSegmentName] = useState('');
//   const [selectedSchemaIndex, setSelectedSchemaIndex] = useState(0);
//   const [schemaItems, setSchemaItems] = useState(initialSchemaItems);

//   const handleSaveSegment = () => {
//     setShowPopup(true);
    
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//     setSegmentName('');
//     setSelectedSchemaIndex(0);
//     setSchemaItems(initialSchemaItems);
//   };

//   const handleAddSchema = () => {
//     setSelectedSchemaIndex(prevIndex => prevIndex + 1);
//     const updatedSchemaItems = [...schemaItems];
//     updatedSchemaItems[selectedSchemaIndex + 1].visible = true;
//     setSchemaItems(updatedSchemaItems);
//   };

//   const handleInputChange = (index, value) => {
//     const updatedSchemaItems = [...schemaItems];
//     updatedSchemaItems[index].value = value;
//     setSchemaItems(updatedSchemaItems);
//   };

//   const handleRemoveSchema = (index) => {
//     const updatedSchemaItems = [...schemaItems];
//     updatedSchemaItems[index].visible = false;
//     setSchemaItems(updatedSchemaItems);
//   };

//   const handleResetSchema = () => {
//     setSelectedSchemaIndex(0);
//     setSchemaItems(initialSchemaItems);
//   };

//   const handleSubmit = () => {
//     const data = {
//       segment_name: segmentName,
//       schema: schemaItems.reduce((acc, schema) => {
//         if (schema.visible) {
//           acc[schema.label.toLowerCase().replace(' ', '_')] = schema.value;
//         }
//         return acc;
//       }, {}),
//     };

//     fetch('https://webhook.site/YOUR_UNIQUE_URL', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     }).then(response => {
//       if (response.ok) {
//         alert('Segment saved successfully!');
//         setShowPopup(false);
//         setSegmentName('');
//         setSelectedSchemaIndex(0);
//         setSchemaItems(initialSchemaItems);
//       }
//     });
//   };

//   return (
//     <div className="App">
      
//       <div className={`left-side ${showPopup ? 'blur' : ''}`}>
//         <h2>Save Segment</h2>
//         <button className="save-button" onClick={handleSaveSegment}>Save segment</button>
//       </div>
//       {showPopup && (
//         <div className="right-side">
//           <div className="popup">
//             <h2>Save Segment</h2>
//             <input
//               type="text"
//               placeholder="Segment Name"
//               value={segmentName}
//               onChange={e => setSegmentName(e.target.value)}
//             />
//             <div className="input-container">
//               {schemaItems.slice(0, selectedSchemaIndex + 1).map((schema, index) => (
//                 schema.visible &&
//                 <div key={index} className="schema-item">
//                   <label>{schema.label}:</label>
//                   <input
//                     type="text"
//                     value={schema.value}
//                     onChange={e => handleInputChange(index, e.target.value)}
//                   />
//                   <button className="remove-button" onClick={() => handleRemoveSchema(index)}>-</button>
//                 </div>
//               ))}
//             </div>

//             <div id="add-schema">
// //                   <select >
// //                   <option id="id" >Add Schema to the segment       
// //                       {/* <i className="fa fa-chevron-down"></i> */}
// //                   </option>
// //                   {/* <i className="fa fa-chevron-down"></i> */}
// //                  <option id="fn">First Name</option>
// //                  <option id="ln">Last Name</option>
// //                  <option id="ge">Gender</option>
// //                  <option id="ag"> Age</option>
// //                  <option id="an">Account Name</option>
// //                  <option id="c">City</option>
// //                  <option id="st">State</option>

// //                   </select>
// //                   {/* <i className="fa fa-chevron-down"></i> */}

// //                    </div>
//             <br></br>
//             <div className="button-container">
//               <button className="add-schema-button" onClick={handleAddSchema}>+ Add Schema</button>
//               <br></br>
//               <br></br>

//               <span className="add-new-schema-link" onClick={handleResetSchema}>+ Add New Schema</span>
//             </div>
//             <div className="footer-buttons">
//               <button className="cancel-button" onClick={handleCancel}>Cancel</button>
//               <button className="submit-button" onClick={handleSubmit}>Save the segment</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// } 
// export default Index;