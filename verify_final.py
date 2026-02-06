
from playwright.sync_api import sync_playwright, expect

def verify_appointment():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:3000/appointment")
        expect(page.locator(".calendar-card")).to_be_visible()

        # Click "6" (Today)
        day_button = page.locator("button.calendar-day:not([disabled])").filter(has_text="6").first
        day_button.click()

        expect(page.locator(".time-slots-card")).to_be_visible()

        page.screenshot(path="verification_final.png")
        browser.close()

if __name__ == "__main__":
    verify_appointment()
