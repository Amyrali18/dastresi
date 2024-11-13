const Countdown = () => {
  const countdownDate = new Date("Jan 5,2030 15:37:35").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timeDown").innerHTML =
    hours + ":" + minutes + ":" + seconds + "";
      if (distance<0){
        clearInterval(x);
        document.getElementById("timeDown").innerHTML="EXPIRED";
      }
  },1000);
  return <>
  <div id="timeDown" className="text-gray-500 text-2xl py-6 font-bold"></div></>;
};

export default Countdown;
