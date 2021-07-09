//Find palimdrome words from a sentence

str = "madam knows malayalam well and her name is kanak and she is civic volunteer"
str1 = ""
str2 = ""
for (t of str) {
    if (t != " ") {
        str2 = str2 + t
        str1 = t + str1
    }
    else {
        if (str1 == str2)
        {
          console.log(str1)
        }
        str1 = ""
        str2 = ""
    }
}
