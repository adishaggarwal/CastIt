# Automation testing for Director portal
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

def test_DirectorPortalLogin():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("dsds@fsf.com")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("Test@12345")
    driver.find_element(By.XPATH, "//body/div[2]/div[3]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click()
    timeout = 4
    assert WebDriverWait(driver, timeout).until(EC.url_contains("Director"))
    driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
    time.sleep(2)
    driver.save_screenshot('DirectorPortalLogin.png')

def test_AddNewRole():
    s = Service("C:\\chromedriver.exe")
    driver = webdriver.Chrome(service=s)

    driver.maximize_window()
    driver.get("http://localhost:3000")

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "input[type='email']").send_keys("dsds@fsf.com")
    driver.find_element(By.CSS_SELECTOR, "input[type='password']").send_keys("Test@12345")
    driver.find_element(By.XPATH, "//body/div[2]/div[3]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click()
    driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
    time.sleep(4)
    element=driver.find_element(By.CSS_SELECTOR,"#AddBttn")
    driver.execute_script("arguments[0].click();", element)
    driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
    time.sleep(4)
    driver.find_element(By.CSS_SELECTOR, "input[type='text']").send_keys("Harry Potter")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]"
                                  "/div[1]/div[2]/form[1]/div[2]/div[1]/div[2]/div[1]/div[1]/textarea[1]").send_keys("A series of seven fantasy novels written by British author J. K. Rowling.")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/"
                                         "div[1]/div[2]/form[1]/div[2]/div[1]/div[3]/div[1]/div[1]/input[1]").send_keys("Fantasy Fiction")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/"
                                         "div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[4]/div[1]/div[1]/input[1]").send_keys("Actor")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]"
                                         "/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[5]/div[1]/div[1]/textarea[1]").send_keys("Need an actor with good comic sense")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/"
                                         "div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[7]/div[1]/div[1]/input[1]").send_keys("Height")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/"
                                  "div[1]/div[2]/form[1]/div[2]/div[1]/div[7]/div[2]/div[1]/input[1]").send_keys("5")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/"
                                  "div[1]/div[2]/form[1]/div[2]/div[1]/div[8]/div[1]/div[1]/input[1]").send_keys("Weight")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/"
                                         "div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[8]/div[2]/div[1]/input[1]").send_keys("60")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/"
                                         "div[1]/div[2]/form[1]/div[2]/div[1]/div[9]/div[1]/div[1]/input[1]").send_keys("xyz")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/"
                                  "div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[9]/div[2]/div[1]/input[1]").send_keys("20")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/"
                                  "div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[10]/div[1]/div[1]/input[1]").send_keys("abc")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/"
                                  "div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[10]/div[2]/div[1]/input[1]").send_keys("30")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/"
                                  "div[1]/div[2]/form[1]/div[2]/div[1]/div[11]/div[1]/div[1]/input[1]").send_keys("abc")
    driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[3]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/"
                                  "form[1]/div[2]/div[1]/div[11]/div[2]/div[1]/input[1]").send_keys("40")
    time.sleep(6)
    driver.find_element(By.CSS_SELECTOR, "div.MuiBox-root.css-rurh6e section.MuiBox-root.css-rqp54r:nth-child(4) "
                                         "div.MuiContainer-root.MuiContainer-maxWidthLg.css-1rujksk-MuiContainer-root div."
                                         "MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-spacing-xs-undefined.css-1f064cs-"
                                         "MuiGrid-root div.MuiBox-root.css-12cy4ki div.MuiGrid-root.MuiGrid-container.MuiGrid-"
                                         "spacing-xs-2.css-mhc70k-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12."
                                         "MuiGrid-grid-lg-7.css-tt67wu-MuiGrid-root:nth-child(2) form.MuiBox-root.css-11b450n "
                                         "div.MuiBox-root.css-ura2dy:nth-child(2) > div.MuiGrid-root.MuiGrid-container."
                                         "MuiGrid-item.MuiGrid-spacing-xs-undefined.MuiGrid-grid-xs-12.MuiGrid-grid-md-6."
                                         "css-g3uofa-MuiGrid-root:nth-child(2)").click()
    time.sleep(2)
    driver.save_screenshot('DirectorPostRole.png')
    driver.refresh()


