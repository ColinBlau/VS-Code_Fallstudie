genderMap = new Map();

genderMap.set("Kritiker", "Kritiker*innen");
genderMap.set("Befürworter", "Befürworter*innen");
genderMap.set("Leser", "Leser*innen");
genderMap.set("Manager", "Manager*innen");
genderMap.set("Geschäftsführer", "Geschäftsführer*innen");
genderMap.set("benutzerfreundlich", "benutzungsfreundlich");
genderMap.set("Mitarbeiter", "Mitarbeiter und Mitarbeiterinnen");

document.getElementByID("userText").value = genderMap.get("Kritiker");