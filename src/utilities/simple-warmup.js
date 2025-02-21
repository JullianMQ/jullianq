import { useEffect } from "react";

function useSimpleWarmup() {
  const checkService = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_API_TOKEN);

    try {
      // Try twice with a 2 second gap if first attempt fails
      const response = await fetch("https://api-portfolio-4637.onrender.com/v1/messages", {
        method: "GET",
        headers: myHeaders
      });

      if (!response.ok) {
        // Wait 2 seconds and try once more
        await new Promise(resolve => setTimeout(resolve, 2000));
        await fetch("https://api-portfolio-4637.onrender.com/v1/messages", {
          method: "GET",
          headers: myHeaders
        });
      }

      console.log("Service warmed up successfully");
    } catch (error) {
      console.warn("Warmup attempt failed:", error);
    }
  };

  useEffect(() => {
    checkService();

    // Keep service warm while user is on the page
    const interval = setInterval(checkService, 10 * 60 * 1000); // Every 10 minutes

    return () => clearInterval(interval);
  }, []);
}

export default useSimpleWarmup;
