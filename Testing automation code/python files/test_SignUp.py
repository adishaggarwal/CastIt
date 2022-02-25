# Automation testing for SignUp page
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys

def test_SignUp():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(3)
    driver.find_element(By.XPATH, "//span[contains(text(),'Sign up')]").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='text']").send_keys("Test")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]"
                                  "/form[1]/div[2]/div[1]/div[1]/input[1]").send_keys("User")
    driver.find_element(By.CSS_SELECTOR, "input[type='date']").click()
    element = driver.find_element(By.CSS_SELECTOR, "input[type='date']")
    element.click()
    element.send_keys("1880")
    element.send_keys(Keys.TAB)
    element.send_keys("02-22")
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("new.user2@gmail.com")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("Test@12345")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]"
                                  "/div[1]/form[1]/div[6]/div[1]/div[1]/input[1]").send_keys("Test@12345")
    driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']").is_selected()
    time.sleep(2)
    driver.find_element(By.XPATH,"/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/form[1]/div[8]").click()
    time.sleep(6)
    driver.save_screenshot('SigningUp.png')
    assert driver.find_element(By.XPATH, "//div[contains(text(),'User Account created successfully!!')]")


def test_DuplicateSignUp():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(3)
    driver.find_element(By.XPATH, "//span[contains(text(),'Sign up')]").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='text']").send_keys("Test")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]"
                                  "/form[1]/div[2]/div[1]/div[1]/input[1]").send_keys("User")
    driver.find_element(By.CSS_SELECTOR, "input[type='date']").click()
    element = driver.find_element(By.CSS_SELECTOR, "input[type='date']")
    element.click()
    element.send_keys("1880")
    element.send_keys(Keys.TAB)
    element.send_keys("02-22")
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("new.user1@gmail.com")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("Test@12345")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]"
                                  "/div[1]/form[1]/div[6]/div[1]/div[1]/input[1]").send_keys("Test@12345")
    driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']").is_selected()
    time.sleep(2)
    driver.find_element(By.XPATH,"/html[1]/body[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/form[1]/div[8]").click()
    time.sleep(6)
    driver.save_screenshot('DuplicateSigningUp.png')
    assert driver.find_element(By.XPATH, "//div[contains(text(),'Email Already Exists')]")

