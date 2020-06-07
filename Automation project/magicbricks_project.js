let fs=require("fs");
let puppeteer=require("puppeteer");
let credentials=process.argv[2];
let url, Locality, Budget,BHK,Residential,property_type;
(async function(){
    let data=await fs.promises.readFile(credentials,"utf-8");
    let credential=JSON.parse(data);
    url=credential.url;

    Residential=credential.Residential;

    property_type=credential.property_type;

    Locality=credential.Locality;
    Budget=credential.Budget;

    BHK=credential.BHK;

    let browser=await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--disable-notifications","--start-maximized"],
        slowMo:80
    });

    //create a newpage
    //await browser.newPage();
    //to return array of currently new tab
    let numberOfPages=await browser.pages();
    let tab= numberOfPages[0];

    await tab.goto(url,{
        waitUntil:"networkidle2"
    });
    await tab.setDefaultNavigationTimeout(10000);
    //await tab.setViewport({ width: 1280, height: 800 })


    await tab.waitForSelector(".m-filter__title");
    
    await tab.click(".m-filter__title");
    
    //rent
    await tab.waitForSelector(".m-filter__ptype__item__label-1");
    let block1=await tab.$$(".m-filter__ptype__item__label-1");
    for(let i=0;i<2;i++){
        
        let residential=await (await block1[i].getProperty("innerText")).jsonValue();
        if(residential==Residential){

            await block1[i].click();
            break;
        }
    }
    
    await tab.waitFor(5000);
    //clicking on top locality
    await tab.waitForSelector(".m-filter__title")
    let l=await tab.$$(".m-filter__title");
    await l[1].click();
    // selecting top localities

    await tab.waitForSelector(".m-filter__ptype__item__label");
    let locality=await tab.$$(".m-filter__ptype__item__label");
    for(let i=1;i<7;i++){

        let valueOfLo=await (await locality[i].getProperty("innerText")).jsonValue();
        if(Locality==valueOfLo){

            await locality[i].click();
            break; 

        }
    }
     //selecting done
     await tab.waitForSelector(".m-filter__cta-done");
     let doneLo=await tab.$$(".m-filter__cta-done");
     await doneLo[1].click();
     await tab.waitFor(5000);


     //selecting property type
     await tab.waitForSelector("#propTypekIco");
     await tab.click("#propTypekIco");

     await tab.waitForSelector(".m-filter__title");
     
     let prop=await tab.$$(".m-filter__title");
     await prop[2].click();

     await tab.waitForSelector(".m-filter__ptype__item .m-filter__ptype__item__label-1");

     let click_prop=await tab.$$(".m-filter__ptype__item .m-filter__ptype__item__label-1");
     for(let i=5;i<=6;i++)
     {
         let type1=await (await click_prop[i].getProperty("innerText")).jsonValue();
         if(property_type==type1){

             await click_prop[i].click();

             break;
         }
     }
     await tab.waitFor(4000);

    //selecting budget
    await tab.waitForSelector(".m-filter__title");
    let k=await tab.$$(".m-filter__title");
    await k[2].click();

    //selecting minimum

    await tab.waitForSelector(".range.m-filter__budget-range.rangeMin.webkit__scroll-filter ul li ");

    let minValue=await tab.$$(".range.m-filter__budget-range.rangeMin.webkit__scroll-filter ul li ");
    //console.log(minValue.length);

    await minValue[1].click();
    // //SELECTING MAMXIMUM VALUE

    await tab.waitForSelector(".range.m-filter__budget-range.rangeMax.webkit__scroll-filter ul li");

    let maxValue=await tab.$$(".range.m-filter__budget-range.rangeMax.webkit__scroll-filter ul li") ;
    for(let i=0;i<maxValue.length;i++){

        let p=await (await maxValue[i].getProperty("innerText")).jsonValue();
        let price=p.slice(2);
        if(Budget==price){

            await maxValue[i].click();
            break;
        
    }}
    //selecting done
     await tab.waitForSelector(".m-filter__cta-done");
     let doneBudget=await tab.$$(".m-filter__cta-done");
     await doneBudget[1].click();
     await tab.waitFor(5000);


     //SELECTING BHK
     await tab.waitForSelector(".m-filter__title");
    let Bhk=await tab.$$(".m-filter__title");
    await Bhk[3].click();

     //SELECTING VALUDE OF BHK
    await tab.waitForSelector(".m-filter__ptype__item .m-filter__ptype__item__label");

     let insideBhk=await tab.$$(".m-filter__ptype__item .m-filter__ptype__item__label");

    for(let i=0;i<=5;i++){

        let valueOfBhk=await (await insideBhk[i].getProperty("innerText")).jsonValue();


        if(valueOfBhk==BHK){

            await insideBhk[i].click();
            break;
        }
        let greaterBhk=Number(BHK.slice(0,1));
        if(greaterBhk>5){

            await insideBhk[5].click();
            break;

        }
    }

    //selecting done of bhk
    await tab.waitForSelector(".m-filter__cta-done");
    let doneBhk=await tab.$$(".m-filter__cta-done");
    await doneBhk[2].click();
    await tab.waitFor(3000);

    //ss
    await tab.waitFor(2000);
    await autoScroll(tab);
    await tab.waitFor(2000);
  await tab.screenshot({ path: 'screenshot.png', fullPage: true })
  
  console.log(" PLEASE CHECK THE SCREENSHOT :)")
  await browser.close();
    
  
})()

async function autoScroll(page) {
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
        var totalHeight = 0;
        var distance = 1000;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
  
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 1000);
      });
    });
  }




   