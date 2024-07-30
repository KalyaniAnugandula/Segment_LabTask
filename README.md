# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- 

  const initialSchemaItems = [
    { label: 'First Name', value: '', visible: true },
    { label: 'Last Name', value: '', visible: false },
    { label: 'Gender', value: '', visible: false },
    { label: 'Age', value: '', visible: false },
    { label: 'Account Name', value: '', visible: false },
    { label: 'City', value: '', visible: false },
    { label: 'State', value: '', visible: false },
  ];

const [showPopup, setShowPopup] = useState(false);
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemaIndex, setSelectedSchemaIndex] = useState(0);
  const [schemaItems, setSchemaItems] = useState(initialSchemaItems);

  const handleSaveSegment = () => {
    setShowPopup(true);
    
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSegmentName('');
    setSelectedSchemaIndex(0);
    setSchemaItems(initialSchemaItems);
  };

  const handleAddSchema = () => {
    setSelectedSchemaIndex(prevIndex => prevIndex + 1);
    const updatedSchemaItems = [...schemaItems];
    updatedSchemaItems[selectedSchemaIndex + 1].visible = true;
    setSchemaItems(updatedSchemaItems);
  };

  const handleInputChange = (index, value) => {
    const updatedSchemaItems = [...schemaItems];
    updatedSchemaItems[index].value = value;
    setSchemaItems(updatedSchemaItems);
  };

  const handleRemoveSchema = (index) => {
    const updatedSchemaItems = [...schemaItems];
    updatedSchemaItems[index].visible = false;
    setSchemaItems(updatedSchemaItems);
  };

  const handleResetSchema = () => {
    setSelectedSchemaIndex(0);
    setSchemaItems(initialSchemaItems);
  };

  const handleSubmit = () => {
    const data = {
      segment_name: segmentName,
      schema: schemaItems.reduce((acc, schema) => {
        if (schema.visible) {
          acc[schema.label.toLowerCase().replace(' ', '_')] = schema.value;
        }
        return acc;
      }, {}),
    };

    fetch('https://webhook.site/YOUR_UNIQUE_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        alert('Segment saved successfully!');
        setShowPopup(false);
        setSegmentName('');
        setSelectedSchemaIndex(0);
        setSchemaItems(initialSchemaItems);
      }
    });
  };

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
//             <div className="button-container">
//               <button className="add-schema-button" onClick={handleAddSchema}>+ Add Schema</button>
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