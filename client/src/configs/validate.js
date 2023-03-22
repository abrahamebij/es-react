import { toast } from "react-toastify";
import { createAreaTrim } from "./createTrim";

function validate(e) {
  let target = e.target;
  // Title error
  if (target.title.value.trim().length < 1) {
    toast.error("Title must contain a value.");
  }
  // Description Error
  else if (target.desc.value.trim().length < 50) {
    toast.error("Minimum length of description must be more than 50.");
  }
  // One-Liner Error
  else if (target.shortDesc.value.trim().length > 40) {
    toast.error("Maximum length of one-liner must be less than 40.");
  }
  // Features Error
  else if (createAreaTrim(target.features.value).length < 1) {
    toast.error("Features field must contain a value.");
  }
  // Technologies error
  else if (target.technologies.value.trim().length < 1) {
    toast.error("Technologies field must contain a value.");
  }
  // Tags error
  else if (target.tags.value.trim().length < 1) {
    toast.error("Tags field must contain a value.");
  }
  // Category error
  else if (
    target.category.value == "none" ||
    target.mode.value == "none" ||
    target.layout.value == "none"
  ) {
    toast.error(
      "An option must be selected in the category/type/layout field."
    );
  }
  // Name error
  else if (target.name.value.trim().length < 1) {
    toast.error("Name field must contain a value.");
  } else {
    return true;
  }
}

export default validate;
