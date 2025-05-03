# Welcome to the code for my jewelry website!

While working with Etsy and the fees that they impose, I decided I wanted a business website of my own, and while it currently still relies on Etsy for purchasing of the final product, I will eventually be moving inventory management and payment handling elsewhere. But for now I use Etsy to handle this and host the images.

## Inventory information management

To get the information from Etsy, I have written a [Node.js program that taps into the Etsy API](https://github.com/phoenix239/EtsyGrabber), pulls down all the listings as one large json formatted block. I then trim and separate that block into the information I need and the separate files used.

## Other Content

Aside from the main website I have included a selection of projects I have worked on to help increase my knowledge and sharpen my skills. These can be found on the web page under the Code tab, or here in pages with a title beginning with `Code` (i.e. CodeDictionary, CodeToDo, etc.).

<br><br>

<h2 style="color:#8a0000"><strong>If you would like to clone and run this repo:</strong></h2>

There is a required apikey repository in `src/json` named `apiKeys.json`, this file is formatted as such:

```JSON
{
  "contact": {
    "serviceId": "MyServiceID",
    "templateId": "MyTemplateID",
    "userName": "MyUserName"
  },
  "codeWeather": {
    "appid": "MyAppID"
  }
}
```

The variables under `contact` can be left as the above strings as the only result will be an email not being sent.

The variable `appid` under `codeWeather` needs to have a valid app id from [OpenWeather](https://openweathermap.org/) (which is free) otherwise an error message is all that will be displayed.
