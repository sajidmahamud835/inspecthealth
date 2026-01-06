from playwright.sync_api import sync_playwright, expect

def verify_google_loading_state():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Login page
        print("Navigating to login page...")
        page.goto("http://localhost:3001/login")

        # Wait for any content to load
        print("Waiting for page content...")
        # page.wait_for_selector("#root")

        # Debug: Print page content if button not found
        try:
             # Locate the Google button
             # Using get_by_role is better
             google_btn = page.get_by_role("button", name="Continue with Google")
             google_btn.wait_for(timeout=10000)
             print("Found Google button")
        except Exception as e:
             print(f"Could not find Google button: {e}")
             page.screenshot(path="verification/login_error.png")
             print("Screenshot saved to verification/login_error.png")
             browser.close()
             return

        page.screenshot(path="verification/login_initial.png")
        print("Initial screenshot saved")

        try:
             # Click the button
            print("Clicking Google button...")
            google_btn.click(timeout=5000)

            # Wait for the text "Connecting..." inside the button
            print("Waiting for loading state...")
            expect(page.get_by_text("Connecting...")).to_be_visible(timeout=5000)

            # Take screenshot of loading state
            page.screenshot(path="verification/login_loading.png")
            print("Successfully captured loading state!")

        except Exception as e:
            print(f"Could not capture loading state: {e}")
            pass

        browser.close()

if __name__ == "__main__":
    verify_google_loading_state()
