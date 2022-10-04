export default [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
    {
      id: '4',
      //type: 'output',
      data: { label: 'New Node' },
      position: { x: 250, y: 350 },
    },
    {
      id: '5',
      data: {
        label: (
          <>
            This one has a <strong>custom style</strong>
          </>
        ),
      },
      position: { x: 400, y: 100 },
      style: {
        bottom: '50px solid #333',
        left: '35px solid transparent',
        right: '35px solid transparent',
        height: '45px',
        backgroundColor: "red",
        padding: "14px",
        borderRadius: "50px"
      }  
    },
    {
      id: '6',
      data: {
        label: <div>Circle Node</div>,
      },
      position: { x: 400, y: 200 },
      style: {
        width: '55px',
        height: '55px',
        backgroundColor: "red",
        //padding: "5px",
        borderRadius: "50px"
      }  
    }
  ];
  