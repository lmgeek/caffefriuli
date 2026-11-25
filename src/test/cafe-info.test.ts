import { describe, expect, it } from "vitest";
import { cafeInfo, localBusiness } from "@/lib/cafe-info";

describe("Verified business information", () => {
  it("uses the supplied Instagram profile in social links and structured data", () => {
    expect(cafeInfo.instagramUrl).toBe("https://www.instagram.com/cafffefriuli_latina/");
    expect(localBusiness.sameAs).toContain("https://www.instagram.com/cafffefriuli_latina/");
  });
  it("uses the official address in Latina", () => {
    expect(localBusiness.address.streetAddress).toBe("Corso della Repubblica 299");
    expect(localBusiness.address.postalCode).toBe("04100");
    expect(localBusiness.address.addressLocality).toBe("Latina");
  });
  it("uses the official contacts", () => {
    expect(cafeInfo.phones).toEqual(["+39 338 172 4875", "+39 333 177 3333"]);
    expect(cafeInfo.email).toBe("info@caffefriuli.it");
    expect(cafeInfo.facebookUrl).toBe("https://www.facebook.com/caffefriuli/?rf=138237256224231");
  });
  it("opens Monday through Thursday from 07:00 to 21:00", () => {
    expect(localBusiness.openingHoursSpecification[0]).toMatchObject({
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "21:00",
    });
  });
  it("opens Friday from 07:00 to 23:00", () => {
    expect(localBusiness.openingHoursSpecification[1]).toMatchObject({
      dayOfWeek: ["Friday"],
      opens: "07:00",
      closes: "23:00",
    });
  });
  it("opens Saturday from 07:00 until 01:00 the next morning", () => {
    expect(localBusiness.openingHoursSpecification[2]).toMatchObject({
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "01:00",
    });
  });
  it("opens Sunday from 15:00 to 21:00", () => {
    expect(localBusiness.openingHoursSpecification[3]).toMatchObject({
      dayOfWeek: ["Sunday"],
      opens: "15:00",
      closes: "21:00",
    });
  });
});
