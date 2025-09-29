const originalAttachShadow = Element.prototype.attachShadow;
Element.prototype.attachShadow = function (args) {
  const newArgs = {
    ...args,
    'mode': "open"
  };
  return originalAttachShadow.call(this, newArgs);
};


