# How to test Requirement 1 and 2
- Create a demo store (If you don't have a free month account)
    - Open an Incognito Window (Not needed but recommended)
    - Go to https://www.bigcommerce.com/essentials/
    - Click button `START YOUR FREE TRIAL`
    - Then create your store
- Go to your dashboard (The link is dynamic, it looks like this: https://YOUR-STORE-NAME.mybigcommerce.com/manage/dashboard)
- Click the button `Upgrade your trial` or `Select a Plan` both do the same
- Once you are in the upgrade page (link is dynamic, it looks like this: https://manage.bigcommerce.com/account/stores/1001488644/upgrade?return_to_dashboard)
    - Select any plan (It doesn't matter witch one)
- Once you are in the `checkout` page, edit the link, adding at the end this `&testing=true`
- Press enter
- Then you can see the banner
- You need to validate that the banner appears when you have the free Month, when it's not a free month it shouldn't appear
# How to test Requirement 3
- Go to https://www.bigcommerce.com/start-a-trial/?testing=true
- Then you can see the banner
