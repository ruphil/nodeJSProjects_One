let counter = 0;
setInterval(() => {
    console.log(`Still Counting ${++counter}`);
    if(counter == 10) process.exit();
}, 200);