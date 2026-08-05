figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
