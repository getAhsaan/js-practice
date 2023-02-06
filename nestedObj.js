const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  const result1 = ourStorage.cabinet["top drawer"].folder2;
  const result2  = ourStorage.desk.drawer;

  console.log(result1, result2);