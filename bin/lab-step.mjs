console.log("lab-step: POC MARKER - code supplied by fork PR");
console.log("lab-step: canary secret present in env:",
  Boolean(process.env.CANARY_SECRET),
  "length:", (process.env.CANARY_SECRET || "").length);
