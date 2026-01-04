from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Intercept network requests to keep the UI in loading state
        # We will NOT continue the request, effectively hanging it.
        def handle_route(route):
            if "identitytoolkit" in route.request.url:
                print(f"Intercepted and holding request: {route.request.url}")
                # Do nothing here to hang the request.
                # The browser will wait for a response that never comes (until we close).
            else:
                route.continue_()

        page.route("**/*", handle_route)

        print("Navigating to register page...")
        page.goto("http://localhost:3000/register")

        # Check for accessibility labels
        print("Checking accessibility...")
        email_input = page.locator('input[type="email"]')
        password_input = page.locator('input[type="password"]')

        # Verify aria-labels
        if email_input.get_attribute("aria-label") == "Email address":
             print("Email aria-label verified.")
        else:
             print(f"Email aria-label mismatch: {email_input.get_attribute('aria-label')}")

        if password_input.get_attribute("aria-label") == "Password":
             print("Password aria-label verified.")
        else:
             print(f"Password aria-label mismatch: {password_input.get_attribute('aria-label')}")

        # Fill the form
        print("Filling form...")
        email_input.fill("testuser@example.com")
        password_input.fill("password123")

        # Click submit
        print("Clicking submit...")
        page.click('button[type="submit"]')

        # Wait for the loading state to appear in the UI
        # Since the network request is hanging, this state should persist.
        try:
            print("Waiting for loading state...")
            page.wait_for_selector('button:has-text("Creating Account...")', timeout=5000)
            print("Loading state verified (UI updated).")

            # Additional check: ensure button is disabled
            btn = page.locator('button[type="submit"]')
            if btn.get_attribute("disabled") is not None:
                print("Button disabled state verified.")
            else:
                print("Button is NOT disabled.")

        except Exception as e:
            print(f"Loading state not found: {e}")

        # Take a screenshot while it hangs
        print("Taking screenshot...")
        page.screenshot(path="/home/jules/verification/register_loading_captured_v3.png")
        print("Screenshot saved to verification/register_loading_captured_v3.png")

        browser.close()

if __name__ == "__main__":
    run()
