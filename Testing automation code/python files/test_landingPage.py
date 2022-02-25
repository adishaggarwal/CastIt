#Automation testing for landing page

from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.service import Service


def test_LandingPage():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")
    timeout = 5
    try:
        WebDriverWait(driver, timeout).until(EC.url_contains("Home"))
        driver.save_screenshot('LandingPage.png')
    except TimeoutError:
        print("Timed out")