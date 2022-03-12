import { useEffect, useState } from "react";


export const Stopwatch = () => {
  const [timer, setTimer] = useState(1);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval", timer);
      setTimer((prev) => {
        if (prev <end) {
            return prev +1;
        }
        else{

            clearInterval(id);
            alert("Time Out 1 to 10 Please Restart ")

        }
        return end;

      });
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Unmounted Timer");
    };
  }, []);

  return (
    <div className="time">
      Timer:-{timer}
    </div>
  );
};
