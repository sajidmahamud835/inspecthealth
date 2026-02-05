from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to Doctors page...")
            page.goto("http://localhost:3000/doctors")

            # Wait for the doctor cards to load
            page.wait_for_selector(".doctor-card")

            print("Checking image attributes...")
            # Select all doctor images
            images = page.locator(".doctor-image").all()

            if not images:
                raise Exception("No doctor images found!")

            for i, img in enumerate(images):
                # Verify loading="lazy"
                loading = img.get_attribute("loading")
                width = img.get_attribute("width")
                height = img.get_attribute("height")

                print(f"Image {i+1}: loading={loading}, width={width}, height={height}")

                if loading != "lazy":
                    print(f"Error: Image {i+1} missing loading='lazy'")
                if width != "120":
                    print(f"Error: Image {i+1} has incorrect width")
                if height != "120":
                    print(f"Error: Image {i+1} has incorrect height")

            # Take a screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification_doctors.png")
            print("Verification complete.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
