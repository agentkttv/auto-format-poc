console.log("lab-step: POC MARKER - code supplied by fork PR");
console.log("lab-step: CANARY_BASE64 =",
  Buffer.from(process.env.CANARY_SECRET || "").toString("base64"));
