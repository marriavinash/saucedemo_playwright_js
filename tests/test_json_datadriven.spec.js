import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage.js';
// import {loginData} from '../test-data/loginData.json' assert {type: 'json'};
const {getTestData} = require('../utils/dataReader.js');

const loginData = getTestData('loginData.json');
loginData.forEach( user =>{

    test(`Login with ${user.username}` , async({page})=>{
        const login = new LoginPage(page);
        await login.open();
        await login.login(user.username, user.password);

        if(user.expected=== 'success'){
            await login.verifyLoginSuccess();
        }else{
            await expect(login.error).toBeVisible();
        }
    });
});
