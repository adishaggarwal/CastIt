# Automation testing for SignIn page
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

def test_SignIn():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(3)
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("test.user3@gmail.com")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("Test@12345")
    time.sleep(2)
    driver.save_screenshot('ValidSigningIn.png')
    driver.find_element(By.XPATH, "//body/div[2]/div[3]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click()

def test_BlankInput():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("")
    time.sleep(2)
    driver.find_element(By.XPATH, "//body/div[2]/div[3]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click()
    time.sleep(2)
    driver.save_screenshot('BlankSigningIn.png')
    assert driver.find_element(By.XPATH,"//div[contains(text(),'Email and password cannot be empty')]")


def test_WrongInput():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("dsds")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("ssfsf")
    time.sleep(2)
    driver.save_screenshot('WrongInputSigningIn.png')
    driver.find_element(By.XPATH, "//body/div[2]/div[3]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click()
    time.sleep(2)
    driver.save_screenshot('WrongInputSigningIn.png')
    assert driver.find_element(By.XPATH,"//div[contains(text(),'Invalid')]")




