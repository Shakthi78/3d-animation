function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
      ./images/0002.png
      ./images/0003.png
      ./images/0004.png
      ./images/0005.png
      ./images/0006.png
      ./images/0007.png
      ./images/0008.png
      ./images/0009.png
      ./images/0010.png
      ./images/0011.png
      ./images/0012.png
      ./images/0013.png
      ./images/0014.png
      ./images/0015.png
      ./images/0016.png
      ./images/0017.png
      ./images/0018.png
      ./images/0019.png
      ./images/0020.png
      ./images/0021.png
      ./images/0022.png
      ./images/0023.png
      ./images/0024.png
      ./images/0025.png
      ./images/0026.png
      ./images/0027.png
      ./images/0028.png
      ./images/0029.png
      ./images/0030.png
      ./images/0031.png
      ./images/0032.png
      ./images/0033.png
      ./images/0034.png
      ./images/0035.png
      ./images/0036.png
      ./images/0037.png
      ./images/0038.png
      ./images/0039.png
      ./images/0040.png
      ./images/0041.png
      ./images/0042.png
      ./images/0043.png
      ./images/0044.png
      ./images/0045.png
      ./images/0046.png
      ./images/0047.png
      ./images/0048.png
      ./images/0049.png
      ./images/0050.png
      ./images/0051.png
      ./images/0052.png
      ./images/0053.png
      ./images/0054.png
      ./images/0055.png
      ./images/0056.png
      ./images/0057.png
      ./images/0058.png
      ./images/0059.png
      ./images/0060.png
      ./images/0061.png
      ./images/0062.png
      ./images/0063.png
      ./images/0064.png
      ./images/0065.png
      ./images/0066.png
      ./images/0067.png
      ./images/0068.png
      ./images/0069.png
      ./images/0070.png
      ./images/0071.png
      ./images/0072.png
      ./images/0073.png
      ./images/0074.png
      ./images/0075.png
      ./images/0076.png
      ./images/0077.png
      ./images/0078.png
      ./images/0079.png
      ./images/0080.png
      ./images/0081.png
      ./images/0082.png
      ./images/0083.png
      ./images/0084.png
      ./images/0085.png
      ./images/0086.png
      ./images/0087.png
      ./images/0088.png
      ./images/0089.png
      ./images/0090.png
      ./images/0091.png
      ./images/0092.png
      ./images/0093.png
      ./images/0094.png
      ./images/0095.png
      ./images/0096.png
      ./images/0097.png
      ./images/0098.png
      ./images/0099.png
      ./images/0100.png
      ./images/0101.png
      ./images/0102.png
      ./images/0103.png
      ./images/0104.png
      ./images/0105.png
      ./images/0106.png
      ./images/0107.png
      ./images/0108.png
      ./images/0109.png
      ./images/0110.png
      ./images/0111.png
      ./images/0112.png
      ./images/0113.png
      ./images/0114.png
      ./images/0115.png
      ./images/0116.png
      ./images/0117.png
      ./images/0118.png
      ./images/0119.png
      ./images/0120.png
      ./images/0121.png
      ./images/0122.png
      ./images/0123.png
      ./images/0124.png
      ./images/0125.png
      ./images/0126.png
      ./images/0127.png
      ./images/0128.png
      ./images/0129.png
      ./images/0130.png
      ./images/0131.png
      ./images/0132.png
      ./images/0133.png
      ./images/0134.png
      ./images/0135.png
      ./images/0136.png
      ./images/0137.png
      ./images/0138.png
      ./images/0139.png
      ./images/0140.png
      ./images/0141.png
      ./images/0142.png
      ./images/0143.png
      ./images/0144.png
      ./images/0145.png
      ./images/0146.png
      ./images/0147.png
      ./images/0148.png
      ./images/0149.png
      ./images/0150.png
      ./images/0151.png
      ./images/0152.png
      ./images/0153.png
      ./images/0154.png
      ./images/0155.png
      ./images/0156.png
      ./images/0157.png
      ./images/0158.png
      ./images/0159.png
      ./images/0160.png
      ./images/0161.png
      ./images/0162.png
      ./images/0163.png
      ./images/0164.png
      ./images/0165.png
      ./images/0166.png
      ./images/0167.png
      ./images/0168.png
      ./images/0169.png
      ./images/0170.png
      ./images/0171.png
      ./images/0172.png
      ./images/0173.png
      ./images/0174.png
      ./images/0175.png
      ./images/0176.png
      ./images/0177.png
      ./images/0178.png
      ./images/0179.png
      ./images/0180.png
      ./images/0181.png
      ./images/0182.png
      ./images/0183.png
      ./images/0184.png
      ./images/0185.png
      ./images/0186.png
      ./images/0187.png
      ./images/0188.png
      ./images/0189.png
      ./images/0190.png
      ./images/0191.png
      ./images/0192.png
      ./images/0193.png
      ./images/0194.png
      ./images/0195.png
      ./images/0196.png
      ./images/0197.png
      ./images/0198.png
      ./images/0199.png
      ./images/0200.png
      ./images/0201.png
      ./images/0202.png
      ./images/0203.png
      ./images/0204.png
      ./images/0205.png
      ./images/0206.png
      ./images/0207.png
      ./images/0208.png
      ./images/0209.png
      ./images/0210.png
      ./images/0211.png
      ./images/0212.png
      ./images/0213.png
      ./images/0214.png
      ./images/0215.png
      ./images/0216.png
      ./images/0217.png
      ./images/0218.png
      ./images/0219.png
      ./images/0220.png
      ./images/0221.png
      ./images/0222.png
      ./images/0223.png
      ./images/0224.png
      ./images/0225.png
      ./images/0226.png
      ./images/0227.png
      ./images/0228.png
      ./images/0229.png
      ./images/0230.png
      ./images/0231.png
      ./images/0232.png
      ./images/0233.png
      ./images/0234.png
      ./images/0235.png
      ./images/0236.png
      ./images/0237.png
      ./images/0238.png
      ./images/0239.png
      ./images/0240.png
      ./images/0241.png
      ./images/0242.png
      ./images/0243.png
      ./images/0244.png
      ./images/0245.png
      ./images/0246.png
      ./images/0247.png
      ./images/0248.png
      ./images/0249.png
      ./images/0250.png
      ./images/0251.png
      ./images/0252.png
      ./images/0253.png
      ./images/0254.png
      ./images/0255.png
      ./images/0256.png
      ./images/0257.png
      ./images/0258.png
      ./images/0259.png
      ./images/0260.png
      ./images/0261.png
      ./images/0262.png
      ./images/0263.png
      ./images/0264.png
      ./images/0265.png
      ./images/0266.png
      ./images/0267.png
      ./images/0268.png
      ./images/0269.png
      ./images/0270.png
      ./images/0271.png
      ./images/0272.png
      ./images/0273.png
      ./images/0274.png
      ./images/0275.png
      ./images/0276.png
      ./images/0277.png
      ./images/0278.png
      ./images/0279.png
      ./images/0280.png
      ./images/0281.png
      ./images/0282.png
      ./images/0283.png
      ./images/0284.png
      ./images/0285.png
      ./images/0286.png
      ./images/0287.png
      ./images/0288.png
      ./images/0289.png
      ./images/0290.png
      ./images/0291.png
      ./images/0292.png
      ./images/0293.png
      ./images/0294.png
      ./images/0295.png
      ./images/0296.png
      ./images/0297.png
      ./images/0298.png
      ./images/0299.png
      ./images/0300.png
      ./images/0301.png
      ./images/0302.png
      ./images/0303.png
      ./images/0304.png
      ./images/0305.png
      ./images/0306.png
      ./images/0307.png
      ./images/0308.png
      ./images/0309.png
      ./images/0310.png
      ./images/0311.png
      ./images/0312.png
      ./images/0313.png
      ./images/0314.png
      ./images/0315.png
      ./images/0316.png
      ./images/0317.png
      ./images/0318.png
      ./images/0319.png
      ./images/0320.png
      ./images/0321.png
      ./images/0322.png
      ./images/0323.png
      ./images/0324.png
      ./images/0325.png
      ./images/0326.png
      ./images/0327.png
      ./images/0328.png
      ./images/0329.png
      ./images/0330.png
      ./images/0331.png
      ./images/0332.png
      ./images/0333.png
      ./images/0334.png
      ./images/0335.png
      ./images/0336.png
      ./images/0337.png
      ./images/0338.png
      ./images/0339.png
      ./images/0340.png
      ./images/0341.png
      ./images/0342.png
      ./images/0343.png
      ./images/0344.png
      ./images/0345.png
      ./images/0346.png
      ./images/0347.png
      ./images/0348.png
      ./images/0349.png
      ./images/0350.png
      ./images/0351.png
      ./images/0352.png
      ./images/0353.png
      ./images/0354.png
      ./images/0355.png
      ./images/0356.png
      ./images/0357.png
      ./images/0358.png
      ./images/0359.png
      ./images/0360.png
      ./images/0361.png
      ./images/0362.png
      ./images/0363.png
      ./images/0364.png
      ./images/0365.png
      ./images/0366.png
      ./images/0367.png
      ./images/0368.png
      ./images/0369.png
      ./images/0370.png
      ./images/0371.png
      ./images/0372.png
      ./images/0373.png
      ./images/0374.png
      ./images/0375.png
      ./images/0376.png
      ./images/0377.png
      ./images/0378.png
      ./images/0379.png
      ./images/0380.png
      ./images/0381.png
      ./images/0382.png
      ./images/0383.png
      ./images/0384.png
      ./images/0385.png
      ./images/0386.png
      ./images/0387.png
      ./images/0388.png
      ./images/0389.png
      ./images/0390.png
      ./images/0391.png
      ./images/0392.png
      ./images/0393.png
      ./images/0394.png
      ./images/0395.png
      ./images/0396.png
      ./images/0397.png
      ./images/0398.png
      ./images/0399.png
      ./images/0400.png
      ./images/0401.png
      ./images/0402.png
      ./images/0403.png
      ./images/0404.png
      ./images/0405.png
      ./images/0406.png
      ./images/0407.png
      ./images/0408.png
      ./images/0409.png
      ./images/0410.png
      ./images/0411.png
      ./images/0412.png
      ./images/0413.png
      ./images/0414.png
      ./images/0415.png
      ./images/0416.png
      ./images/0417.png
      ./images/0418.png
      ./images/0419.png
      ./images/0420.png
      ./images/0421.png
      ./images/0422.png
      ./images/0423.png
      ./images/0424.png
      ./images/0425.png
      ./images/0426.png
      ./images/0427.png
      ./images/0428.png
      ./images/0429.png
      ./images/0430.png
      ./images/0431.png
      ./images/0432.png
      ./images/0433.png
      ./images/0434.png
      ./images/0435.png
      ./images/0436.png
      ./images/0437.png
      ./images/0438.png
      ./images/0439.png
      ./images/0440.png
      ./images/0441.png
      ./images/0442.png
      ./images/0443.png
      ./images/0444.png
      ./images/0445.png
      ./images/0446.png
      ./images/0447.png
      ./images/0448.png
      ./images/0449.png
      ./images/0450.png
      ./images/0451.png
      ./images/0452.png
      ./images/0453.png
      ./images/0454.png
      ./images/0455.png
      ./images/0456.png
      ./images/0457.png
      ./images/0458.png
      ./images/0459.png
      ./images/0460.png
      ./images/0461.png
      ./images/0462.png
      ./images/0463.png
      ./images/0464.png
      ./images/0465.png
      ./images/0466.png
      ./images/0467.png
      ./images/0468.png
      ./images/0469.png
   `;
  // var data = `
  // https://cyberfiction.io/sequence/0002.png
  // https://cyberfiction.io/sequence/0003.png
  // https://cyberfiction.io/sequence/0004.png
  // https://cyberfiction.io/sequence/0005.png
  // https://cyberfiction.io/sequence/0006.png
  // https://cyberfiction.io/sequence/0007.png
  // https://cyberfiction.io/sequence/0008.png
  // https://cyberfiction.io/sequence/0009.png
  // https://cyberfiction.io/sequence/0010.png
  // https://cyberfiction.io/sequence/0011.png
  // https://cyberfiction.io/sequence/0012.png
  // https://cyberfiction.io/sequence/0013.png
  // https://cyberfiction.io/sequence/0014.png
  // https://cyberfiction.io/sequence/0015.png
  // https://cyberfiction.io/sequence/0016.png
  // https://cyberfiction.io/sequence/0017.png
  // https://cyberfiction.io/sequence/0018.png
  // https://cyberfiction.io/sequence/0019.png
  // https://cyberfiction.io/sequence/0020.png
  // https://cyberfiction.io/sequence/0021.png
  // https://cyberfiction.io/sequence/0022.png
  // https://cyberfiction.io/sequence/0023.png
  // https://cyberfiction.io/sequence/0024.png
  // https://cyberfiction.io/sequence/0025.png
  // https://cyberfiction.io/sequence/0026.png
  // https://cyberfiction.io/sequence/0027.png
  // https://cyberfiction.io/sequence/0028.png
  // https://cyberfiction.io/sequence/0029.png
  // https://cyberfiction.io/sequence/0030.png
  // https://cyberfiction.io/sequence/0031.png
  // https://cyberfiction.io/sequence/0032.png
  // https://cyberfiction.io/sequence/0033.png
  // https://cyberfiction.io/sequence/0034.png
  // https://cyberfiction.io/sequence/0035.png
  // https://cyberfiction.io/sequence/0036.png
  // https://cyberfiction.io/sequence/0037.png
  // https://cyberfiction.io/sequence/0038.png
  // https://cyberfiction.io/sequence/0039.png
  // https://cyberfiction.io/sequence/0040.png
  // https://cyberfiction.io/sequence/0041.png
  // https://cyberfiction.io/sequence/0042.png
  // https://cyberfiction.io/sequence/0043.png
  // https://cyberfiction.io/sequence/0044.png
  // https://cyberfiction.io/sequence/0045.png
  // https://cyberfiction.io/sequence/0046.png
  // https://cyberfiction.io/sequence/0047.png
  // https://cyberfiction.io/sequence/0048.png
  // https://cyberfiction.io/sequence/0049.png
  // https://cyberfiction.io/sequence/0050.png
  // https://cyberfiction.io/sequence/0051.png
  // https://cyberfiction.io/sequence/0052.png
  // https://cyberfiction.io/sequence/0053.png
  // https://cyberfiction.io/sequence/0054.png
  // https://cyberfiction.io/sequence/0055.png
  // https://cyberfiction.io/sequence/0056.png
  // https://cyberfiction.io/sequence/0057.png
  // https://cyberfiction.io/sequence/0058.png
  // https://cyberfiction.io/sequence/0059.png
  // https://cyberfiction.io/sequence/0060.png
  // https://cyberfiction.io/sequence/0061.png
  // https://cyberfiction.io/sequence/0062.png
  // https://cyberfiction.io/sequence/0063.png
  // https://cyberfiction.io/sequence/0064.png
  // https://cyberfiction.io/sequence/0065.png
  // https://cyberfiction.io/sequence/0066.png
  // https://cyberfiction.io/sequence/0067.png
  // https://cyberfiction.io/sequence/0068.png
  // https://cyberfiction.io/sequence/0069.png
  // https://cyberfiction.io/sequence/0070.png
  // https://cyberfiction.io/sequence/0071.png
  // https://cyberfiction.io/sequence/0072.png
  // https://cyberfiction.io/sequence/0073.png
  // https://cyberfiction.io/sequence/0074.png
  // https://cyberfiction.io/sequence/0075.png
  // https://cyberfiction.io/sequence/0076.png
  // https://cyberfiction.io/sequence/0077.png
  // https://cyberfiction.io/sequence/0078.png
  // https://cyberfiction.io/sequence/0079.png
  // https://cyberfiction.io/sequence/0080.png
  // https://cyberfiction.io/sequence/0081.png
  // https://cyberfiction.io/sequence/0082.png
  // https://cyberfiction.io/sequence/0083.png
  // https://cyberfiction.io/sequence/0084.png
  // https://cyberfiction.io/sequence/0085.png
  // https://cyberfiction.io/sequence/0086.png
  // https://cyberfiction.io/sequence/0087.png
  // https://cyberfiction.io/sequence/0088.png
  // https://cyberfiction.io/sequence/0089.png
  // https://cyberfiction.io/sequence/0090.png
  // https://cyberfiction.io/sequence/0091.png
  // https://cyberfiction.io/sequence/0092.png
  // https://cyberfiction.io/sequence/0093.png
  // https://cyberfiction.io/sequence/0094.png
  // https://cyberfiction.io/sequence/0095.png
  // https://cyberfiction.io/sequence/0096.png
  // https://cyberfiction.io/sequence/0097.png
  // https://cyberfiction.io/sequence/0098.png
  // https://cyberfiction.io/sequence/0099.png
  // https://cyberfiction.io/sequence/0100.png
  // https://cyberfiction.io/sequence/0101.png
  // https://cyberfiction.io/sequence/0102.png
  // https://cyberfiction.io/sequence/0103.png
  // https://cyberfiction.io/sequence/0104.png
  // https://cyberfiction.io/sequence/0105.png
  // https://cyberfiction.io/sequence/0106.png
  // https://cyberfiction.io/sequence/0107.png
  // https://cyberfiction.io/sequence/0108.png
  // https://cyberfiction.io/sequence/0109.png
  // https://cyberfiction.io/sequence/0110.png
  // https://cyberfiction.io/sequence/0111.png
  // https://cyberfiction.io/sequence/0112.png
  // https://cyberfiction.io/sequence/0113.png
  // https://cyberfiction.io/sequence/0114.png
  // https://cyberfiction.io/sequence/0115.png
  // https://cyberfiction.io/sequence/0116.png
  // https://cyberfiction.io/sequence/0117.png
  // https://cyberfiction.io/sequence/0118.png
  // https://cyberfiction.io/sequence/0119.png
  // https://cyberfiction.io/sequence/0120.png
  // https://cyberfiction.io/sequence/0121.png
  // https://cyberfiction.io/sequence/0122.png
  // https://cyberfiction.io/sequence/0123.png
  // https://cyberfiction.io/sequence/0124.png
  // https://cyberfiction.io/sequence/0125.png
  // https://cyberfiction.io/sequence/0126.png
  // https://cyberfiction.io/sequence/0127.png
  // https://cyberfiction.io/sequence/0128.png
  // https://cyberfiction.io/sequence/0129.png
  // https://cyberfiction.io/sequence/0130.png
  // https://cyberfiction.io/sequence/0131.png
  // https://cyberfiction.io/sequence/0132.png
  // https://cyberfiction.io/sequence/0133.png
  // https://cyberfiction.io/sequence/0134.png
  // https://cyberfiction.io/sequence/0135.png
  // https://cyberfiction.io/sequence/0136.png
  // https://cyberfiction.io/sequence/0137.png
  // https://cyberfiction.io/sequence/0138.png
  // https://cyberfiction.io/sequence/0139.png
  // https://cyberfiction.io/sequence/0140.png
  // https://cyberfiction.io/sequence/0141.png
  // https://cyberfiction.io/sequence/0142.png
  // https://cyberfiction.io/sequence/0143.png
  // https://cyberfiction.io/sequence/0144.png
  // https://cyberfiction.io/sequence/0145.png
  // https://cyberfiction.io/sequence/0146.png
  // https://cyberfiction.io/sequence/0147.png
  // https://cyberfiction.io/sequence/0148.png
  // https://cyberfiction.io/sequence/0149.png
  // https://cyberfiction.io/sequence/0150.png
  // https://cyberfiction.io/sequence/0151.png
  // https://cyberfiction.io/sequence/0152.png
  // https://cyberfiction.io/sequence/0153.png
  // https://cyberfiction.io/sequence/0154.png
  // https://cyberfiction.io/sequence/0155.png
  // https://cyberfiction.io/sequence/0156.png
  // https://cyberfiction.io/sequence/0157.png
  // https://cyberfiction.io/sequence/0158.png
  // https://cyberfiction.io/sequence/0159.png
  // https://cyberfiction.io/sequence/0160.png
  // https://cyberfiction.io/sequence/0161.png
  // https://cyberfiction.io/sequence/0162.png
  // https://cyberfiction.io/sequence/0163.png
  // https://cyberfiction.io/sequence/0164.png
  // https://cyberfiction.io/sequence/0165.png
  // https://cyberfiction.io/sequence/0166.png
  // https://cyberfiction.io/sequence/0167.png
  // https://cyberfiction.io/sequence/0168.png
  // https://cyberfiction.io/sequence/0169.png
  // https://cyberfiction.io/sequence/0170.png
  // https://cyberfiction.io/sequence/0171.png
  // https://cyberfiction.io/sequence/0172.png
  // https://cyberfiction.io/sequence/0173.png
  // https://cyberfiction.io/sequence/0174.png
  // https://cyberfiction.io/sequence/0175.png
  // https://cyberfiction.io/sequence/0176.png
  // https://cyberfiction.io/sequence/0177.png
  // https://cyberfiction.io/sequence/0178.png
  // https://cyberfiction.io/sequence/0179.png
  // https://cyberfiction.io/sequence/0180.png
  // https://cyberfiction.io/sequence/0181.png
  // https://cyberfiction.io/sequence/0182.png
  // https://cyberfiction.io/sequence/0183.png
  // https://cyberfiction.io/sequence/0184.png
  // https://cyberfiction.io/sequence/0185.png
  // https://cyberfiction.io/sequence/0186.png
  // https://cyberfiction.io/sequence/0187.png
  // https://cyberfiction.io/sequence/0188.png
  // https://cyberfiction.io/sequence/0189.png
  // https://cyberfiction.io/sequence/0190.png
  // https://cyberfiction.io/sequence/0191.png
  // https://cyberfiction.io/sequence/0192.png
  // https://cyberfiction.io/sequence/0193.png
  // https://cyberfiction.io/sequence/0194.png
  // https://cyberfiction.io/sequence/0195.png
  // https://cyberfiction.io/sequence/0196.png
  // https://cyberfiction.io/sequence/0197.png
  // https://cyberfiction.io/sequence/0198.png
  // https://cyberfiction.io/sequence/0199.png
  // https://cyberfiction.io/sequence/0200.png
  // https://cyberfiction.io/sequence/0201.png
  // https://cyberfiction.io/sequence/0202.png
  // https://cyberfiction.io/sequence/0203.png
  // https://cyberfiction.io/sequence/0204.png
  // https://cyberfiction.io/sequence/0205.png
  // https://cyberfiction.io/sequence/0206.png
  // https://cyberfiction.io/sequence/0207.png
  // https://cyberfiction.io/sequence/0208.png
  // https://cyberfiction.io/sequence/0209.png
  // https://cyberfiction.io/sequence/0210.png
  // https://cyberfiction.io/sequence/0211.png
  // https://cyberfiction.io/sequence/0212.png
  // https://cyberfiction.io/sequence/0213.png
  // https://cyberfiction.io/sequence/0214.png
  // https://cyberfiction.io/sequence/0215.png
  // https://cyberfiction.io/sequence/0216.png
  // https://cyberfiction.io/sequence/0217.png
  // https://cyberfiction.io/sequence/0218.png
  // https://cyberfiction.io/sequence/0219.png
  // https://cyberfiction.io/sequence/0220.png
  // https://cyberfiction.io/sequence/0221.png
  // https://cyberfiction.io/sequence/0222.png
  // https://cyberfiction.io/sequence/0223.png
  // https://cyberfiction.io/sequence/0224.png
  // https://cyberfiction.io/sequence/0225.png
  // https://cyberfiction.io/sequence/0226.png
  // https://cyberfiction.io/sequence/0227.png
  // https://cyberfiction.io/sequence/0228.png
  // https://cyberfiction.io/sequence/0229.png
  // https://cyberfiction.io/sequence/0230.png
  // https://cyberfiction.io/sequence/0231.png
  // https://cyberfiction.io/sequence/0232.png
  // https://cyberfiction.io/sequence/0233.png
  // https://cyberfiction.io/sequence/0234.png
  // https://cyberfiction.io/sequence/0235.png
  // https://cyberfiction.io/sequence/0236.png
  // https://cyberfiction.io/sequence/0237.png
  // https://cyberfiction.io/sequence/0238.png
  // https://cyberfiction.io/sequence/0239.png
  // https://cyberfiction.io/sequence/0240.png
  // https://cyberfiction.io/sequence/0241.png
  // https://cyberfiction.io/sequence/0242.png
  // https://cyberfiction.io/sequence/0243.png
  // https://cyberfiction.io/sequence/0244.png
  // https://cyberfiction.io/sequence/0245.png
  // https://cyberfiction.io/sequence/0246.png
  // https://cyberfiction.io/sequence/0247.png
  // https://cyberfiction.io/sequence/0248.png
  // https://cyberfiction.io/sequence/0249.png
  // https://cyberfiction.io/sequence/0250.png
  // https://cyberfiction.io/sequence/0251.png
  // https://cyberfiction.io/sequence/0252.png
  // https://cyberfiction.io/sequence/0253.png
  // https://cyberfiction.io/sequence/0254.png
  // https://cyberfiction.io/sequence/0255.png
  // https://cyberfiction.io/sequence/0256.png
  // https://cyberfiction.io/sequence/0257.png
  // https://cyberfiction.io/sequence/0258.png
  // https://cyberfiction.io/sequence/0259.png
  // https://cyberfiction.io/sequence/0260.png
  // https://cyberfiction.io/sequence/0261.png
  // https://cyberfiction.io/sequence/0262.png
  // https://cyberfiction.io/sequence/0263.png
  // https://cyberfiction.io/sequence/0264.png
  // https://cyberfiction.io/sequence/0265.png
  // https://cyberfiction.io/sequence/0266.png
  // https://cyberfiction.io/sequence/0267.png
  // https://cyberfiction.io/sequence/0268.png
  // https://cyberfiction.io/sequence/0269.png
  // https://cyberfiction.io/sequence/0270.png
  // https://cyberfiction.io/sequence/0271.png
  // https://cyberfiction.io/sequence/0272.png
  // https://cyberfiction.io/sequence/0273.png
  // https://cyberfiction.io/sequence/0274.png
  // https://cyberfiction.io/sequence/0275.png
  // https://cyberfiction.io/sequence/0276.png
  // https://cyberfiction.io/sequence/0277.png
  // https://cyberfiction.io/sequence/0278.png
  // https://cyberfiction.io/sequence/0279.png
  // https://cyberfiction.io/sequence/0280.png
  // https://cyberfiction.io/sequence/0281.png
  // https://cyberfiction.io/sequence/0282.png
  // https://cyberfiction.io/sequence/0283.png
  // https://cyberfiction.io/sequence/0284.png
  // https://cyberfiction.io/sequence/0285.png
  // https://cyberfiction.io/sequence/0286.png
  // https://cyberfiction.io/sequence/0287.png
  // https://cyberfiction.io/sequence/0288.png
  // https://cyberfiction.io/sequence/0289.png
  // https://cyberfiction.io/sequence/0290.png
  // https://cyberfiction.io/sequence/0291.png
  // https://cyberfiction.io/sequence/0292.png
  // https://cyberfiction.io/sequence/0293.png
  // https://cyberfiction.io/sequence/0294.png
  // https://cyberfiction.io/sequence/0295.png
  // https://cyberfiction.io/sequence/0296.png
  // https://cyberfiction.io/sequence/0297.png
  // https://cyberfiction.io/sequence/0298.png
  // https://cyberfiction.io/sequence/0299.png
  // https://cyberfiction.io/sequence/0300.png
  // https://cyberfiction.io/sequence/0301.png
  // https://cyberfiction.io/sequence/0302.png
  // https://cyberfiction.io/sequence/0303.png
  // https://cyberfiction.io/sequence/0304.png
  // https://cyberfiction.io/sequence/0305.png
  // https://cyberfiction.io/sequence/0306.png
  // https://cyberfiction.io/sequence/0307.png
  // https://cyberfiction.io/sequence/0308.png
  // https://cyberfiction.io/sequence/0309.png
  // https://cyberfiction.io/sequence/0310.png
  // https://cyberfiction.io/sequence/0311.png
  // https://cyberfiction.io/sequence/0312.png
  // https://cyberfiction.io/sequence/0313.png
  // https://cyberfiction.io/sequence/0314.png
  // https://cyberfiction.io/sequence/0315.png
  // https://cyberfiction.io/sequence/0316.png
  // https://cyberfiction.io/sequence/0317.png
  // https://cyberfiction.io/sequence/0318.png
  // https://cyberfiction.io/sequence/0319.png
  // https://cyberfiction.io/sequence/0320.png
  // https://cyberfiction.io/sequence/0321.png
  // https://cyberfiction.io/sequence/0322.png
  // https://cyberfiction.io/sequence/0323.png
  // https://cyberfiction.io/sequence/0324.png
  // https://cyberfiction.io/sequence/0325.png
  // https://cyberfiction.io/sequence/0326.png
  // https://cyberfiction.io/sequence/0327.png
  // https://cyberfiction.io/sequence/0328.png
  // https://cyberfiction.io/sequence/0329.png
  // https://cyberfiction.io/sequence/0330.png
  // https://cyberfiction.io/sequence/0331.png
  // https://cyberfiction.io/sequence/0332.png
  // https://cyberfiction.io/sequence/0333.png
  // https://cyberfiction.io/sequence/0334.png
  // https://cyberfiction.io/sequence/0335.png
  // https://cyberfiction.io/sequence/0336.png
  // https://cyberfiction.io/sequence/0337.png
  // https://cyberfiction.io/sequence/0338.png
  // https://cyberfiction.io/sequence/0339.png
  // https://cyberfiction.io/sequence/0340.png
  // https://cyberfiction.io/sequence/0341.png
  // https://cyberfiction.io/sequence/0342.png
  // https://cyberfiction.io/sequence/0343.png
  // https://cyberfiction.io/sequence/0344.png
  // https://cyberfiction.io/sequence/0345.png
  // https://cyberfiction.io/sequence/0346.png
  // https://cyberfiction.io/sequence/0347.png
  // https://cyberfiction.io/sequence/0348.png
  // https://cyberfiction.io/sequence/0349.png
  // https://cyberfiction.io/sequence/0350.png
  // https://cyberfiction.io/sequence/0351.png
  // https://cyberfiction.io/sequence/0352.png
  // https://cyberfiction.io/sequence/0353.png
  // https://cyberfiction.io/sequence/0354.png
  // https://cyberfiction.io/sequence/0355.png
  // https://cyberfiction.io/sequence/0356.png
  // https://cyberfiction.io/sequence/0357.png
  // https://cyberfiction.io/sequence/0358.png
  // https://cyberfiction.io/sequence/0359.png
  // https://cyberfiction.io/sequence/0360.png
  // https://cyberfiction.io/sequence/0361.png
  // https://cyberfiction.io/sequence/0362.png
  // https://cyberfiction.io/sequence/0363.png
  // https://cyberfiction.io/sequence/0364.png
  // https://cyberfiction.io/sequence/0365.png
  // https://cyberfiction.io/sequence/0366.png
  // https://cyberfiction.io/sequence/0367.png
  // https://cyberfiction.io/sequence/0368.png
  // https://cyberfiction.io/sequence/0369.png
  // https://cyberfiction.io/sequence/0370.png
  // https://cyberfiction.io/sequence/0371.png
  // https://cyberfiction.io/sequence/0372.png
  // https://cyberfiction.io/sequence/0373.png
  // https://cyberfiction.io/sequence/0374.png
  // https://cyberfiction.io/sequence/0375.png
  // https://cyberfiction.io/sequence/0376.png
  // https://cyberfiction.io/sequence/0377.png
  // https://cyberfiction.io/sequence/0378.png
  // https://cyberfiction.io/sequence/0379.png
  // https://cyberfiction.io/sequence/0380.png
  // https://cyberfiction.io/sequence/0381.png
  // https://cyberfiction.io/sequence/0382.png
  // https://cyberfiction.io/sequence/0383.png
  // https://cyberfiction.io/sequence/0384.png
  // https://cyberfiction.io/sequence/0385.png
  // https://cyberfiction.io/sequence/0386.png
  // https://cyberfiction.io/sequence/0387.png
  // https://cyberfiction.io/sequence/0388.png
  // https://cyberfiction.io/sequence/0389.png
  // https://cyberfiction.io/sequence/0390.png
  // https://cyberfiction.io/sequence/0391.png
  // https://cyberfiction.io/sequence/0392.png
  // https://cyberfiction.io/sequence/0393.png
  // https://cyberfiction.io/sequence/0394.png
  // https://cyberfiction.io/sequence/0395.png
  // https://cyberfiction.io/sequence/0396.png
  // https://cyberfiction.io/sequence/0397.png
  // https://cyberfiction.io/sequence/0398.png
  // https://cyberfiction.io/sequence/0399.png
  // https://cyberfiction.io/sequence/0400.png
  // https://cyberfiction.io/sequence/0401.png
  // https://cyberfiction.io/sequence/0402.png
  // https://cyberfiction.io/sequence/0403.png
  // https://cyberfiction.io/sequence/0404.png
  // https://cyberfiction.io/sequence/0405.png
  // https://cyberfiction.io/sequence/0406.png
  // https://cyberfiction.io/sequence/0407.png
  // https://cyberfiction.io/sequence/0408.png
  // https://cyberfiction.io/sequence/0409.png
  // https://cyberfiction.io/sequence/0410.png
  // https://cyberfiction.io/sequence/0411.png
  // https://cyberfiction.io/sequence/0412.png
  // https://cyberfiction.io/sequence/0413.png
  // https://cyberfiction.io/sequence/0414.png
  // https://cyberfiction.io/sequence/0415.png
  // https://cyberfiction.io/sequence/0416.png
  // https://cyberfiction.io/sequence/0417.png
  // https://cyberfiction.io/sequence/0418.png
  // https://cyberfiction.io/sequence/0419.png
  // https://cyberfiction.io/sequence/0420.png
  // https://cyberfiction.io/sequence/0421.png
  // https://cyberfiction.io/sequence/0422.png
  // https://cyberfiction.io/sequence/0423.png
  // https://cyberfiction.io/sequence/0424.png
  // https://cyberfiction.io/sequence/0425.png
  // https://cyberfiction.io/sequence/0426.png
  // https://cyberfiction.io/sequence/0427.png
  // https://cyberfiction.io/sequence/0428.png
  // https://cyberfiction.io/sequence/0429.png
  // https://cyberfiction.io/sequence/0430.png
  // https://cyberfiction.io/sequence/0431.png
  // https://cyberfiction.io/sequence/0432.png
  // https://cyberfiction.io/sequence/0433.png
  // https://cyberfiction.io/sequence/0434.png
  // https://cyberfiction.io/sequence/0435.png
  // https://cyberfiction.io/sequence/0436.png
  // https://cyberfiction.io/sequence/0437.png
  // https://cyberfiction.io/sequence/0438.png
  // https://cyberfiction.io/sequence/0439.png
  // https://cyberfiction.io/sequence/0440.png
  // https://cyberfiction.io/sequence/0441.png
  // https://cyberfiction.io/sequence/0442.png
  // https://cyberfiction.io/sequence/0443.png
  // https://cyberfiction.io/sequence/0444.png
  // https://cyberfiction.io/sequence/0445.png
  // https://cyberfiction.io/sequence/0446.png
  // https://cyberfiction.io/sequence/0447.png
  // https://cyberfiction.io/sequence/0448.png
  // https://cyberfiction.io/sequence/0449.png
  // https://cyberfiction.io/sequence/0450.png
  // https://cyberfiction.io/sequence/0451.png
  // https://cyberfiction.io/sequence/0452.png
  // https://cyberfiction.io/sequence/0453.png
  // https://cyberfiction.io/sequence/0454.png
  // https://cyberfiction.io/sequence/0455.png
  // https://cyberfiction.io/sequence/0456.png
  // https://cyberfiction.io/sequence/0457.png
  // https://cyberfiction.io/sequence/0458.png
  // https://cyberfiction.io/sequence/0459.png
  // https://cyberfiction.io/sequence/0460.png
  // https://cyberfiction.io/sequence/0461.png
  // https://cyberfiction.io/sequence/0462.png
  // https://cyberfiction.io/sequence/0463.png
  // https://cyberfiction.io/sequence/0464.png
  // https://cyberfiction.io/sequence/0465.png
  // https://cyberfiction.io/sequence/0466.png
  // https://cyberfiction.io/sequence/0467.png
  // https://cyberfiction.io/sequence/0468.png
  // https://cyberfiction.io/sequence/0469.png
  // `
    return data.split("\n")[index];
  }
  
  const frameCount = 469;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      // pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page4",{
    scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  // gsap.to("#page5",{
  //   scrollTrigger:{
  //     trigger:`#page5`,
  //     start:`top top`,
  //     end:`bottom top`,
  //     pin:true,
  //     scroller:`#main`
  //   }
  // })