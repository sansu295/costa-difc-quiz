const masterQuizData = {
  "Week 1": [
    {
      q: "What is the correct extraction time for a standard double shot of espresso?",
      a: ["15-20 seconds", "20-30 seconds", "30-40 seconds", "40-45 seconds"],
      c: 1
    },
    {
      q: "What is the standard yield (weight) in grams of a double shot of espresso?",
      a: ["25g-30g", "36g-44g", "50g-60g", "15g-20g"],
      c: 1
    },
    {
      q: "Which coffee beverage is characterized by equal parts espresso, steamed milk, and milk foam?",
      a: ["Caffè Latte", "Cappuccino", "Flat White", "Macchiato"],
      c: 1
    },
    {
      q: "What is the correct milk temperature range for a standard flat white or latte?",
      a: ["50°C - 55°C", "60°C - 65°C", "70°C - 75°C", "80°C - 85°C"],
      c: 1
    },
    {
      q: "What is the standard espresso base for a Flat White?",
      a: ["Double Espresso", "Double Ristretto", "Single Espresso", "Single Cortissimo"],
      c: 1
    },
    {
      q: "How many shots of espresso go into a standard Medium Caffè Latte?",
      a: ["1 shot", "2 shots", "3 shots", "4 shots"],
      c: 1
    },
    {
      q: "What is the standard thickness of foam on a Caffè Latte?",
      a: ["0.5 cm (approx. 1/4 inch)", "1 cm (approx. 1/2 inch)", "2 cm (approx. 3/4 inch)", "No foam"],
      c: 0
    },
    {
      q: "How many shots of espresso go into a standard Large Iced Latte?",
      a: ["1 shot", "2 shots", "3 shots", "4 shots"],
      c: 2
    },
    {
      q: "What is the correct sequence of ingredients for a standard Caffè Mocha?",
      a: ["Espresso, steamed milk, chocolate powder, whipped cream", "Chocolate powder/sauce, espresso, mix well, steamed milk, whipped cream", "Steamed milk, espresso, chocolate syrup on top", "Espresso, hot water, chocolate sauce"],
      c: 1
    },
    {
      q: "What type of milk is used as the default standard in our recipes unless requested otherwise?",
      a: ["Skimmed (Skinny) Milk", "Semi-Skimmed Milk", "Whole (Full Fat) Milk", "Oat Milk"],
      c: 2
    },
    {
      q: "What is the primary difference between a Latte and a Cappuccino?",
      a: ["Latte has more espresso than Cappuccino", "Cappuccino has a thicker layer of micro-foam (usually 1.5 cm) and is textured drier than a Latte", "Latte is served colder than Cappuccino", "There is no difference"],
      c: 1
    },
    {
      q: "How often should you purge and wipe the steam wand?",
      a: ["Every hour", "After every single milk steaming cycle", "At the end of your shift", "Only when it looks dirty"],
      c: 1
    },
    {
      q: "What is the standard pour pattern for a Flat White?",
      a: ["A dusting of chocolate powder", "A clean, white florette/circle of foam in the center with a brown crema ring", "A caramel drizzle grid", "A fully white top surface"],
      c: 1
    },
    {
      q: "What is the espresso shot requirement for a standard Cortado?",
      a: ["Single Espresso", "Double Espresso", "Double Ristretto", "Single Ristretto"],
      c: 2
    },
    {
      q: "Which of the following is the correct definition of a 'Macchiato'?",
      a: ["Espresso with steamed milk filled to the top", "Espresso marked with a small spoonful of dense milk foam", "A cold milk drink with espresso poured over the top", "A blend of chocolate and espresso"],
      c: 1
    },
    {
      q: "What is the correct weight of dry coffee grinds used for a standard double portafilter?",
      a: ["14g - 16g", "17g - 19g", "20g - 22g", "24g - 26g"],
      c: 1
    },
    {
      q: "What is the ideal thickness of the crema layer on a perfect espresso shot?",
      a: ["No crema is best", "1-2mm", "3-5mm", "Over 10mm"],
      c: 2
    },
    {
      q: "If an espresso shot runs too fast (e.g., under 15 seconds), how should you adjust the grinder?",
      a: ["Make the grind coarser", "Make the grind finer", "Increase the water temperature", "Decrease the tamp pressure"],
      c: 1
    },
    {
      q: "If an espresso shot drips very slowly and takes over 40 seconds, how should you adjust the grinder?",
      a: ["Make the grind coarser", "Make the grind finer", "Tamp much harder", "Add more dry coffee grounds"],
      c: 0
    },
    {
      q: "Why must we 'flush' the group head before inserting the portafilter for a new shot?",
      a: ["To cool down the water", "To remove any leftover coffee oils or old grounds from the shower screen", "To increase water pressure", "To clean the drip tray"],
      c: 1
    },
    {
      q: "What is the shelf life of opened coffee beans in the hopper before they start to lose freshness?",
      a: ["4 hours", "24 hours", "3 days", "1 week"],
      c: 0
    },
    {
      q: "What does 'under-extracted' espresso taste like?",
      a: ["Sweet and smooth", "Sour, salty, thin, and lacking body", "Bitter, dry, and burnt", "Creamy and heavy"],
      c: 1
    },
    {
      q: "What does 'over-extracted' espresso taste like?",
      a: ["Sour and bright", "Bitter, astringent, dry, and empty", "Very sweet and aromatic", "Salty and rich"],
      c: 1
    },
    {
      q: "What is the correct water temperature inside our espresso boilers?",
      a: ["80°C - 85°C", "90°C - 95°C", "100°C - 105°C", "110°C - 115°C"],
      c: 1
    },
    {
      q: "How many shots of espresso go into a standard Medium Americano?",
      a: ["1 shot", "2 shots", "3 shots", "4 shots"],
      c: 2
    },
    {
      q: "In what order do you prepare an Americano?",
      a: ["Espresso first, then pour hot water over it", "Hot water first, then extract the espresso shots directly into/over the water", "Mix espresso and cold milk, then add water", "Water and espresso are brewed together"],
      c: 1
    },
    {
      q: "What is the standard cup size for a Flat White?",
      a: ["4 oz", "8 oz", "12 oz", "16 oz"],
      c: 1
    },
    {
      q: "What is the standard cup size for an Espresso Macchiato?",
      a: ["4 oz", "8 oz", "12 oz", "16 oz"],
      c: 0
    },
    {
      q: "What is the purpose of 'tamping' the coffee grounds?",
      a: ["To clean the rim of the portafilter", "To pack the coffee grounds evenly to ensure uniform water extraction", "To measure the weight of the coffee", "To increase the temperature of the grounds"],
      c: 1
    },
    {
      q: "What force/pressure is generally recommended for an even tamp?",
      a: ["5 kg", "15 kg", "30 kg", "50 kg"],
      c: 1
    },
    {
      q: "How do you check if your milk foam is 'micro-foam'?",
      a: ["It has large, visible bubbles on top", "It looks like stiff egg whites", "It has a shiny, wet paint appearance with no visible bubbles", "It separates immediately into liquid and dry foam"],
      c: 2
    },
    {
      q: "Why must we never re-steam leftover milk?",
      a: ["It ruins the texture, destroys sweetness, and risks bacterial growth", "It makes the milk too sweet", "It cools down too fast", "It takes too long to steam"],
      c: 0
    },
    {
      q: "What is the maximum safe holding temperature for cold milk in the fridge?",
      a: ["4°C / 39°F", "8°C / 46°F", "10°C / 50°F", "12°C / 54°F"],
      c: 0
    },
    {
      q: "How should you clean a steam wand tip if the holes are blocked?",
      a: ["Soak it in cold milk overnight", "Wipe it with a dry napkin", "Use a designated steam wand pin tool to clear the holes, then purge thoroughly", "Use a metal knife to pry the holes open"],
      c: 2
    },
    {
      q: "What is the correct way to store a milk jug when not in use?",
      a: ["Upside down on a clean, sanitized jug rinser or wire rack", "Right side up on the counter with water inside", "Inside the fridge with milk left in it", "Under the espresso machine steam arm"],
      c: 0
    },
    {
      q: "What is the ideal water pressure (bars) for extracting espresso?",
      a: ["3-4 bars", "9 bars", "15 bars", "20 bars"],
      c: 1
    },
    {
      q: "What does 'channeling' mean during extraction?",
      a: ["Water finding the path of least resistance through cracks or weak spots in the coffee puck, leading to uneven extraction", "Changing the water channel on the machine", "The way we serve espresso in different channels", "Water flowing directly into the drip tray"],
      c: 0
    },
    {
      q: "Which of these factors does NOT affect grind calibration?",
      a: ["Humidity in the air", "Temperature of the shop", "The brand of the paper cups", "Age of the roasted coffee beans"],
      c: 2
    },
    {
      q: "When steaming milk, at what temperature should you stop 'stretching' (injecting air) and start 'rolling'?",
      a: ["At approximately 37°C / 100°F (hand warm)", "At 60°C / 140°F", "At 70°C / 158°F", "Right at the end of the steaming cycle"],
      c: 0
    },
    {
      q: "What is the correct recipe for a standard Babyccino?",
      a: ["Single shot of espresso with milk foam", "Warm frothed milk with a light dusting of chocolate powder, served in a 4oz cup without espresso", "Warm water with milk foam", "Hot chocolate with whipped cream"],
      c: 1
    },
    {
      q: "How many shots of espresso are in a standard Small Americano?",
      a: ["1 shot", "2 shots", "3 shots", "4 shots"],
      c: 1
    },
    {
      q: "What is the standard volume of a single espresso shot?",
      a: ["10ml - 15ml", "25ml - 30ml", "45ml - 50ml", "60ml - 70ml"],
      c: 1
    },
    {
      q: "Which grind texture is appropriate for an espresso machine?",
      a: ["Coarse like sea salt", "Medium like sand", "Fine like table salt / powdered sugar", "Extra coarse like gravel"],
      c: 2
    },
    {
      q: "What is the standard espresso base for a Cortissimo?",
      a: ["Standard Double Espresso", "Single Ristretto", "A highly concentrated short extraction (15ml-20ml) shot of espresso", "Double Espresso Lungo"],
      c: 2
    },
    {
      q: "How many grams of coffee grinds are typically in a single portafilter basket?",
      a: ["7g - 9g", "10g - 12g", "14g - 16g", "18g - 20g"],
      c: 0
    },
    {
      q: "What is the primary characteristic of a Ristretto shot?",
      a: ["It has more water than a standard shot", "It uses the same amount of coffee but is extracted with half the water, making it sweeter and more concentrated", "It is extracted for 50 seconds", "It is served cold"],
      c: 1
    },
    {
      q: "What should you do if the crema on your espresso shots is pale, thin, and disappears quickly?",
      a: ["Keep using the shot as normal", "Check if the beans are stale, adjust grind to be finer, or check if the extraction time is too fast", "Tamp lighter", "Add sugar to hold the crema"],
      c: 1
    },
    {
      q: "Why do we tap the milk jug gently on the counter after steaming?",
      a: ["To wake up the customer", "To break any large surface bubbles and make the foam smooth and uniform", "To cool the milk down", "To mix the milk with the crema"],
      c: 1
    },
    {
      q: "What is the standard order of operations when preparing any milk-based espresso drink?",
      a: ["Steam milk first, let it sit, grind and pull shots, pour", "Grind and dose coffee, start espresso extraction, steam milk during extraction, pour immediately once extraction finishes", "Pour cold milk into the cup, add shots, steam the whole cup", "Steam milk, pour into cup, extract espresso directly on top"],
      c: 1
    },
    {
      q: "What is the perfect appearance of dry coffee pucks after knocking them out?",
      a: ["Wet and watery like mud", "Dry, solid, intact disks that hold their shape", "Powdery and loose like dry sand", "They should stick completely inside the basket"],
      c: 1
    }
  ],
  "Week 2": [
    {
      q: "Which of these ingredients is used in a standard Iced Caramel Macchiato?",
      a: ["Chocolate sauce, whole milk, double espresso, caramel sauce", "Vanilla syrup, whole milk, ice, double espresso, caramel drizzle grid on top", "Caramel syrup, whipped cream, single espresso", "Condensed milk, whole milk, cinnamon powder"],
      c: 1
    },
    {
      q: "What is the correct order of assembly for a standard cold brew with cold foam?",
      a: ["Ice, cold foam, cold brew coffee", "Cold brew coffee, ice, pour cold foam gently on top", "Cold foam, ice, cold brew coffee", "Cold brew and cold foam blended together with ice"],
      c: 1
    },
    {
      q: "How long should loose-leaf black tea be steeped for the perfect flavor balance?",
      a: ["1 minute", "3 to 5 minutes", "10 minutes", "No limit, leave the bag in"],
      c: 1
    },
    {
      q: "How long should green tea be steeped to avoid bitterness?",
      a: ["1 to 2 minutes", "2 to 3 minutes", "5 to 7 minutes", "10 minutes"],
      c: 1
    },
    {
      q: "What is the target water temperature for brewing delicate green or white teas?",
      a: ["100°C / 212°F", "80°C to 85°C / 176°F to 185°F", "60°C / 140°F", "110°C / 230°F"],
      c: 1
    },
    {
      q: "What is the target water temperature for brewing robust black or herbal teas?",
      a: ["70°C / 158°F", "80°C / 176°F", "95°C to 100°C / 203°F to 212°F", "120°C / 248°F"],
      c: 2
    },
    {
      q: "What is the base liquid used for our standard Frappés?",
      a: ["Hot water", "Frappé liquid base, whole milk, and ice, blended together", "Skimmed milk and cold water only", "Yogurt and fruit juice"],
      c: 1
    },
    {
      q: "How do you prevent 'separation' in a freshly blended Frappé or Smoothie?",
      a: ["Add more ice", "Use the correct amount of emulsifying Frappé base/binder and blend on the correct programmed cycle", "Stir it with a spoon after pouring", "Serve it without ice"],
      c: 1
    },
    {
      q: "What is the standard recipe for preparing a standard Fruit Smoothie?",
      a: ["Fresh fruit and hot water", "Fruit smoothie puree/mix to the line, ice, and water/milk, blended on the designated cycle", "Fruit syrup and whipped cream", "Powder mix and espresso shots"],
      c: 1
    },
    {
      q: "How many pumps of syrup go into a standard Medium Iced flavored Latte?",
      a: ["2 pumps", "3 pumps", "4 pumps", "5 pumps"],
      c: 1
    },
    {
      q: "What is the standard recipe for an Iced Latte?",
      a: ["Espresso, steamed milk, ice cubes", "Fill cup with ice, add cold milk, pour fresh espresso shots over the top, and stir", "Espresso, cold water, ice, milk foam", "Blended milk and ice with coffee powder"],
      c: 1
    },
    {
      q: "When preparing an Iced Americano, what should you put in the cup first?",
      a: ["The hot espresso shots", "Cold water and ice, then pour the espresso shots over them to preserve crema and flavor", "The paper straw", "The lid"],
      c: 1
    },
    {
      q: "What is the correct recipe for a standard Hot Chocolate?",
      a: ["Steamed milk and hot water", "Chocolate powder dissolved in a small amount of hot water, topped with perfectly steamed, velvety milk", "Espresso and chocolate syrup", "Cold milk and chocolate powder shaken together"],
      c: 1
    },
    {
      q: "What is the difference between a Hot Chocolate and a Caffè Mocha?",
      a: ["Hot Chocolate has espresso; Mocha does not", "Mocha contains espresso shots mixed with chocolate and steamed milk; Hot Chocolate contains no espresso", "Mocha is colder than Hot Chocolate", "There is no difference"],
      c: 1
    },
    {
      q: "What is the correct procedure for measuring ingredients for a blended beverage?",
      a: ["Guess the amounts directly in the blender jar", "Always use the graduated measuring lines on the specific blender cup/jug for accuracy and consistency", "Fill the blender jar to the top", "Use a coffee cup to measure"],
      c: 1
    },
    {
      q: "What is the ideal texture of a perfectly blended Frappé?",
      a: ["Chunky with large pieces of ice", "Smooth, thick, and pourable, with no visible ice chunks or separation", "Thin and watery like milk", "Foamy and dry"],
      c: 1
    },
    {
      q: "How should you clean the blender jars between making different blended drinks?",
      a: ["Wipe them with a dry cloth", "Rinse thoroughly on the rapid jar-rinser station with clean water", "Wash with chemical sanitizer every time", "No rinse is needed unless it was a peanut product"],
      c: 1
    },
    {
      q: "What is the standard shelf life of prepared whipped cream canisters in the fridge?",
      a: ["12 hours", "24 hours", "48 hours", "1 week"],
      c: 1
    },
    {
      q: "What gas cartridge is used to charge our whipped cream dispensers?",
      a: ["Carbon Dioxide (CO2)", "Nitrogen (N2)", "Nitrous Oxide (N2O)", "Oxygen (O2)"],
      c: 2
    },
    {
      q: "What gas cartridge is used to charge our Nitro Cold Brew kegs/dispensers?",
      a: ["Carbon Dioxide (CO2)", "Pure Nitrogen (N2) or compressed air", "Nitrous Oxide (N2O)", "Helium (He)"],
      c: 1
    },
    {
      q: "How many times should you shake a whipped cream canister after charging it with a charger?",
      a: ["Do not shake", "2-3 times", "10-15 times vigorously", "Over 50 times"],
      c: 2
    },
    {
      q: "What is the standard brewing/steeping time for cold brew coffee?",
      a: ["4 hours", "12 hours", "14 to 20 hours (typically 16 hours at room temp or 20 hours in fridge)", "48 hours"],
      c: 2
    },
    {
      q: "What type of coffee grind is used for brewing Cold Brew?",
      a: ["Coarse (like sea salt or breadcrumbs) to prevent over-extraction and cloudy filtering", "Fine (like espresso)", "Medium (like table salt)", "Powdered"],
      c: 0
    },
    {
      q: "How should brewed Cold Brew concentrate be stored?",
      a: ["In a sealed container in the walk-in fridge", "On the counter at room temperature", "In the freezer", "Under the espresso machine"],
      c: 0
    },
    {
      q: "What is the standard dilution ratio of cold brew concentrate to water/milk for a standard serving?",
      a: ["1:1 ratio (equal parts concentrate and water/milk) with ice", "1:5 ratio (mostly water)", "Undiluted concentrate only", "1:10 ratio"],
      c: 0
    },
    {
      q: "When preparing an Iced Matcha Latte, how should the matcha powder be dissolved?",
      a: ["Stirred directly into cold milk with a spoon", "Whisked with a small amount of hot water (or warm milk) first to create a smooth, clump-free paste before adding cold milk and ice", "Shaken dry in the cup", "Blended in the blender at high speed"],
      c: 1
    },
    {
      q: "What is the standard recipe for an Iced Flat White?",
      a: ["Double standard espresso, cold milk, and ice", "Double Ristretto shots extracted over cold milk and ice, with a small layer of cold-frothed micro-foam on top", "Single espresso blended with milk and ice", "Steamed milk poured over ice and espresso"],
      c: 1
    },
    {
      q: "Which of these ingredients is NOT used in our standard Iced Mocha?",
      a: ["Espresso shots", "Chocolate powder or syrup", "Cold milk", "Lemon slice"],
      c: 3
    },
    {
      q: "What is the correct way to layer an Iced Macchiato?",
      a: ["Milk first, then espresso, then ice", "Ice and cold milk first, then pour espresso slowly over the top to create a distinct dark-on-light layered look", "Espresso first, then ice, then milk", "Blended together"],
      c: 1
    },
    {
      q: "Why do we use specific colored scoops for ice?",
      a: ["For decoration", "To prevent cross-contamination between different stations (e.g., bar ice vs BOH ice)", "They are cheaper to buy", "To measure the exact weight of the ice"],
      c: 1
    },
    {
      q: "What is the correct procedure for making a standard Iced Tea?",
      a: ["Mix hot tea with cold milk", "Brew concentrated tea, sweeten if needed, dilute with cold water and pour over a full cup of ice, garnished with fresh lemon/mint", "Blend tea leaves with ice and sugar", "Use bottled iced tea only"],
      c: 1
    },
    {
      q: "Which blended beverage contains a shot of espresso as standard?",
      a: ["Mango Smoothie", "Strawberry Frappé", "Espresso Frappé / Coffee Frappé", "Vanilla Frappé"],
      c: 2
    },
    {
      q: "What is the standard thickness of hot chocolate foam?",
      a: ["No foam", "0.5 cm (velvety micro-foam, similar to Latte)", "3 cm (dry, dense foam)", "It should be 100% foam"],
      c: 1
    },
    {
      q: "What is the correct recipe for a Chai Latte?",
      a: ["Chai syrup or powder dissolved in hot water only", "Chai syrup or powder steamed together with milk to create a rich, spiced, micro-foamed beverage", "Black tea bag with cold milk", "Espresso shot with cinnamon powder"],
      c: 1
    },
    {
      q: "Does a standard Chai Latte contain espresso?",
      a: ["Yes, 2 shots", "No, it is a spiced tea and milk beverage (unless a 'Dirty Chai' is requested, which adds a shot of espresso)", "Yes, 1 shot", "Yes, but only in the Large size"],
      c: 1
    },
    {
      q: "How many grams of chocolate powder are used for a standard Medium Hot Chocolate?",
      a: ["10g", "25g - 30g", "50g", "100g"],
      c: 1
    },
    {
      q: "What is the correct temperature for the water used to wash smoothie and frappé blender pitchers?",
      a: ["Cold water only", "Warm/hot water with approved sanitizing solution", "Boiling water (100°C)", "Ice water"],
      c: 1
    },
    {
      q: "How many pumps of sauce go into a standard Large Frappé?",
      a: ["2 pumps", "3 pumps", "4 pumps", "6 pumps"],
      c: 2
    },
    {
      q: "What is the standard holding time for fresh mint leaves used in iced drinks?",
      a: ["12 hours", "24 hours (end of day)", "3 days", "1 week"],
      c: 1
    },
    {
      q: "What should you do if a smoothie turns out too thin and watery?",
      a: ["Pour it back into the blender, add the correct measured amount of ice/fruit puree, and re-blend", "Serve it anyway", "Add hot water to balance it", "Stir in whipped cream to thicken it"],
      c: 0
    },
    {
      q: "Which of these is a classic garnish for our standard Strawberry Frappé?",
      a: ["Chocolate drizzle", "Whipped cream and strawberry sauce drizzle", "Lemon slice", "Cinnamon dusting"],
      c: 1
    },
    {
      q: "What is the correct method for preparing a standard Iced Flat White?",
      a: ["Extract 2 standard espresso shots, pour cold milk over ice, and add the shots on top", "Extract 2 Ristretto shots directly over ice, add cold milk, and top with cold micro-foam", "Blend espresso, milk, and ice together", "Steam milk first, then pour over ice and espresso"],
      c: 1
    },
    {
      q: "How should you store fresh lemon slices used for iced tea garnishes?",
      a: ["On the counter at room temperature", "In a clean, covered container inside the under-counter fridge, day-dotted", "In the freezer", "Under the espresso machine drip tray"],
      c: 1
    },
    {
      q: "What is the standard shelf life of an unopened bottle of fruit smoothie puree?",
      a: ["1 week", "1 month", "Check the manufacturer's expiration date printed on the bottle", "1 year"],
      c: 2
    },
    {
      q: "What is the shelf life of an *opened* bottle of fruit smoothie puree kept in the fridge?",
      a: ["24 hours", "7 to 14 days (or as per manufacturer guidelines, typically 7 days dotted)", "30 days", "6 months"],
      c: 1
    },
    {
      q: "What is the correct procedure if a customer asks for an iced drink without ice?",
      a: ["Refuse the order", "Explain that the recipe requires ice for volume and temperature, but accommodate by using chilled milk and filling to the standard recipe line", "Charge them double", "Fill the rest of the cup with hot water"],
      c: 1
    },
    {
      q: "Which blender speed cycle is typically programmed for smoothies?",
      a: ["High speed continuous (Cycle 4)", "Variable speed pulse/programmed smoothie cycle (typically Cycle 2 or 3 depending on equipment)", "Low speed only (Cycle 1)", "Manual pulsing for 2 minutes"],
      c: 1
    },
    {
      q: "What is the risk of blending a beverage for too long?",
      a: ["It makes the drink too hot", "The ice melts completely, making the drink thin, watery, and warm", "It increases the caffeine content", "It ruins the blender motor immediately"],
      c: 1
    },
    {
      q: "What must you do before pouring a blended smoothie into the serving cup?",
      a: ["Tap the blender jar to settle any bubbles, and check for any unblended ice chunks", "Stir it with a dirty spoon", "Add hot water", "Strain it through a coffee filter"],
      c: 0
    },
    {
      q: "What is the standard garnish for a Caramel Frappé?",
      a: ["Chocolate flakes", "Whipped cream and caramel sauce drizzle grid", "Fresh mint leaves", "Cinnamon powder"],
      c: 1
    }
  ],
  "Week 3": [
    {
      q: "What is the correct oven temperature for baking pre-proved frozen croissants?",
      a: ["150°C / 302°F", "170°C to 180°C / 338°F to 356°F", "200°C / 392°F", "220°C / 428°F"],
      c: 1
    },
    {
      q: "How long is the standard baking time for frozen butter croissants?",
      a: ["5-8 minutes", "15-18 minutes", "25-30 minutes", "40 minutes"],
      c: 1
    },
    {
      q: "How long must baked pastries cool down on the tray before they can be served or placed in the display case?",
      a: ["No cooling needed, serve immediately", "5 minutes", "15 to 20 minutes (to allow the structure to set and pastry to become crispy)", "1 hour"],
      c: 2
    },
    {
      q: "What is the maximum holding time for freshly baked croissants in our display case before they must be wasted?",
      a: ["4 hours", "12 hours (or end of day/shift)", "24 hours", "48 hours"],
      c: 1
    },
    {
      q: "What is the correct procedure for defrosting frozen savory items (like toasties or paninis)?",
      a: ["Leave them on the counter at room temperature overnight", "Defrost them slowly inside the walk-in fridge (chiller) at 1°C to 4°C for 12-24 hours", "Microwave them on high power for 5 minutes", "Bake them straight from frozen at high temperature"],
      c: 1
    },
    {
      q: "What is the shelf life of defrosted toasties kept in the display fridge?",
      a: ["24 hours (1 day)", "48 hours (2 days)", "72 hours (3 days)", "5 days"],
      c: 1
    },
    {
      q: "What is the target core temperature when heating a savory panini or toastie for a customer?",
      a: ["50°C / 122°F", "63°C / 145°F", "75°C / 167°F or above", "100°C / 212°F"],
      c: 2
    },
    {
      q: "Which heating equipment is used to toast paninis and toasties to ensure a crispy texture and hot center?",
      a: ["Standard Microwave", "High-speed combination oven (Merrychef/TurboChef) or Contact Grill", "Convection Baking Oven", "Hot holding cabinet"],
      c: 1
    },
    {
      q: "What is the correct way to handle food items when placing them in the display case?",
      a: ["Use your bare hands", "Always use clean tongs, bakery tissue, or disposable gloves", "Use a cleaning cloth", "Let the customer grab them directly"],
      c: 1
    },
    {
      q: "How should sweet pastries and savory items be arranged in the display case?",
      a: ["Mixed together on the same tray", "Clearly separated into designated sweet and savory zones to prevent cross-contamination and flavor transfer", "Stacked on top of each other", "By color only"],
      c: 1
    },
    {
      q: "What is the correct procedure if a customer asks for a gluten-free item?",
      a: ["Suggest a standard croissant and tell them it has low gluten", "Serve a pre-packaged gluten-free item in its original sealed wrap to prevent cross-contamination on the bar", "Wipe a standard plate and serve a loose cake", "Tell them we don't serve gluten-free items"],
      c: 1
    },
    {
      q: "Why must we use a baking sheet/parchment paper when heating toasties in the high-speed oven?",
      a: ["To make the oven look nice", "To prevent cheese/grease from sticking to the oven plates, reducing smoke, fire risks, and flavor cross-contamination", "To slow down the cooking process", "To make the food taste sweeter"],
      c: 1
    },
    {
      q: "What is the shelf life of opened muffin boxes kept in the back of house?",
      a: ["24 hours", "48 hours", "72 hours (if kept sealed/airtight to prevent drying out)", "1 week"],
      c: 2
    },
    {
      q: "What is the correct display rotation rule for food products?",
      a: ["LIFO (Last In, First Out)", "FIFO (First In, First Out) - older stock with shorter shelf life sold first", "FILO (First In, Last Out)", "Random rotation"],
      c: 1
    },
    {
      q: "How often should you check the temperature of the food display fridge?",
      a: ["Once a day", "At least 3 times a day (Opening, Mid-day, Closing) and record in the food safety log", "Only when it feels warm", "Once a week"],
      c: 1
    },
    {
      q: "What is the legal maximum temperature for a chilled food display unit?",
      a: ["4°C / 39°F", "8°C / 46°F", "10°C / 50°F", "15°C / 59°F"],
      c: 1
    },
    {
      q: "What should you do if the display fridge temperature reads 10°C?",
      a: ["Ignore it unless it reaches 15°C", "Report it immediately to the Store Manager, check if the door was left open, and monitor; if it stays high, move food to a working fridge", "Turn the fridge off and on again", "Put ice cubes on the shelves"],
      c: 1
    },
    {
      q: "How should you present a heated panini to a customer dining in?",
      a: ["In a paper bag", "On a clean, pre-warmed ceramic plate with a napkin and appropriate clean cutlery, served toasted side up", "Directly on the wooden table", "On a baking sheet only"],
      c: 1
    },
    {
      q: "What is the standard procedure for handling unsold display food at the end of the night?",
      a: ["Leave it in the display case for tomorrow morning", "Record all expired/unsold items on the waste log, discard them, and thoroughly clean the display shelves", "Take it home without logging it", "Give it to regular customers for free without logging"],
      c: 1
    },
    {
      q: "Why do we keep food allergen information booklets near the till/display area?",
      a: ["Because it is a legal requirement and essential for customer safety to verify ingredients upon request", "To show customers pictures of the food", "To help staff memorize the prices", "To use as decoration"],
      c: 0
    },
    {
      q: "What is the maximum holding time for pre-packed sandwiches after delivery (if kept refrigerated)?",
      a: ["12 hours", "24 hours", "Use by the printed expiration date on the label (typically 48-72 hours)", "5 days"],
      c: 2
    },
    {
      q: "When baking frozen pastries, why must we leave space between them on the baking tray?",
      a: ["To make them easier to count", "To allow even heat circulation and expansion of the pastry layers during baking", "To save baking paper", "To make them bake slower"],
      c: 1
    },
    {
      q: "What is the correct way to handle a cookie when serving it to a customer?",
      a: ["Hold it with bare hands", "Use clean cookie tongs or bakery paper to place it in a cookie bag or plate", "Slide it across the counter", "Hand it over in your gloved hand after cleaning the bar"],
      c: 1
    },
    {
      q: "How long should a heated toastie rest before serving it to a customer?",
      a: ["Do not rest, serve immediately when boiling hot", "Approx. 1 minute (allows cheese to settle and prevents burns)", "5 minutes", "10 minutes"],
      c: 1
    },
    {
      q: "What is the correct storage method for back-up cakes in the walk-in freezer?",
      a: ["Unwrapped on the shelves", "Stored in their original boxes, fully sealed, labeled with receipt/delivery dates", "Next to the chemical bottles", "In plastic bags on the floor"],
      c: 1
    },
    {
      q: "What is the correct baking setting for a standard Butter Croissant in the combination oven?",
      a: ["Setting 1 (High steam, high heat)", "Setting 2 (Convection baking, medium fan speed, no steam)", "Setting 5 (Maximum microwave power)", "Setting 10 (Grill only)"],
      c: 1
    },
    {
      q: "What color cutting board should be used for slicing sweet cakes or muffins?",
      a: ["Yellow (Cooked Meats)", "Red (Raw Meat)", "White (Bakery and Dairy)", "Green (Salad and Fruit)"],
      c: 2
    },
    {
      q: "What color cutting board should be used for slicing fresh salad ingredients or tomatoes for sandwiches?",
      a: ["White", "Green", "Yellow", "Brown"],
      c: 1
    },
    {
      q: "If a panini contains raw/unpasteurized ingredients, what must you do before serving?",
      a: ["Serve it cold", "Ensure it is heated thoroughly to the required core temperature (75°C) to eliminate pathogens", "Wipe it with a cloth", "Only toast it for 5 seconds"],
      c: 1
    },
    {
      q: "How should the cake display cabinet glass be cleaned?",
      a: ["With soapy water and a sponge during service", "Sprayed with glass cleaner on a microfiber cloth (sprayed away from food) when empty, polished dry", "Wiped with a damp general-purpose bar cloth", "It should not be cleaned"],
      c: 1
    },
    {
      q: "What is the correct sequence of action when a customer orders a heated sandwich?",
      a: ["Take payment, place sandwich in oven, prepare drink, retrieve sandwich, serve together", "Place sandwich in oven, take payment, make drink, serve sandwich cold", "Make drink, serve drink, then heat sandwich", "Serve sandwich frozen, let them heat it at home"],
      c: 0
    },
    {
      q: "Why must we never use a wet tray for baking pastries?",
      a: ["It causes the pastry bottoms to become soggy, stick, and boil instead of bake crispy", "It ruins the oven racks", "It makes the baking paper catch fire", "It changes the color of the tray"],
      c: 0
    },
    {
      q: "What is the holding time for defrosted slicing cakes (like Carrot Cake or Cheesecake) in the chilled display?",
      a: ["24 hours", "48 hours", "3 days (72 hours) or as per brand spec sheet, day-dotted", "1 week"],
      c: 2
    },
    {
      q: "What should you do if a food item falls on the floor?",
      a: ["Wipe it off and place it back in the display case", "Discard it immediately, log it as waste, and wash your hands", "Serve it only if heated afterward", "Give it to a pet"],
      c: 1
    },
    {
      q: "How should you store fresh fruit (like bananas or apples) used for displays or smoothies?",
      a: ["In a sealed plastic box in the freezer", "In clean, well-ventilated baskets, checked daily for mold or over-ripeness", "In the chemical cupboard", "In the dishwasher"],
      c: 1
    },
    {
      q: "What is the correct heating program for a standard ham and cheese toastie in the Merrychef oven?",
      a: ["30 seconds microwave only", "The designated 'Toastie' program (combining microwave power and convection heat for approx. 45-60 seconds)", "5 minutes convection bake", "10 seconds toast"],
      c: 1
    },
    {
      q: "Why must we avoid stacking pastries too high in the display cabinet?",
      a: ["It blocks the cold air circulation and can cause items to squash or look unappealing", "It makes them look too expensive", "It makes them dry out faster", "It slows down the customer's choice"],
      c: 0
    },
    {
      q: "What is the holding time for freshly baked cookies in the display case?",
      a: ["4 hours", "24 hours (end of day)", "48 hours", "3 days"],
      c: 1
    },
    {
      q: "How often should food tongs be replaced or sanitized during a shift?",
      a: ["Once at the end of the day", "Every 4 hours (minimum) or immediately if dropped/cross-contaminated", "Once a week", "Every hour"],
      c: 1
    },
    {
      q: "What should you do if you notice mold on a single berry in a fruit container?",
      a: ["Throw away only the molded berry and use the rest", "Discard the entire container to prevent microscopic mold spore contamination, log as waste", "Wash the molded berry and use it as garnish", "Put the container in the freezer to kill the mold"],
      c: 1
    },
    {
      q: "What is the correct temperature for the walk-in freezer?",
      a: ["0°C to -4°C", "-18°C or colder", "-10°C to -12°C", "4°C"],
      c: 1
    },
    {
      q: "How should we label food containers that we prep ourselves (e.g., sliced cheese)?",
      a: ["With a price tag", "With a 'Day Dot' containing: product name, prep date, prep time, expiry date, and initials", "With our name only", "We don't need to label them"],
      c: 1
    },
    {
      q: "What is the maximum time a high-risk food (like chicken or dairy) can be left in the 'Danger Zone' (5°C to 63°C)?",
      a: ["30 minutes", "1 hour", "2 hours", "4 hours"],
      c: 2
    },
    {
      q: "Which of these is considered a 'high-risk' food in our cafe?",
      a: ["Granulated sugar", "Coffee beans", "Tuna mayonnaise sandwich", "Paper cups"],
      c: 2
    },
    {
      q: "What should you do if a customer returns a heated panini claiming the inside is still frozen?",
      a: ["Tell them to wait for it to melt", "Apologize, discard the cold panini, check that you used the correct oven program, prepare a fresh one heated to a safe core temperature, and log the waste", "Put the same panini back in the oven for 2 minutes", "Suggest they eat a cookie instead"],
      c: 1
    },
    {
      q: "How do you clean the panini grill plates safely?",
      a: ["Pour cold water directly onto the hot plates", "Let plates cool down slightly, scrape residues with a wire grill brush, wipe with damp cloth, and apply a thin layer of cooking oil", "Spray with heavy bleach while hot", "Use a metal scraper while the unit is at full temperature"],
      c: 1
    },
    {
      q: "What is the standard weight of a pastry portion (like a slice of cake)?",
      a: ["50g", "Approx. 100g - 120g (according to brand specifications)", "200g", "Whatever looks biggest"],
      c: 1
    },
    {
      q: "Why do we use specific non-stick liners inside combination ovens?",
      a: ["To make the oven look colorful", "To protect the oven surfaces, prevent food sticking, and make daily cleaning quick and effective without scratching the metal", "To cook the food twice as fast", "To keep the food warm after cooking"],
      c: 1
    },
    {
      q: "What is the proper way to defrost a frozen cake?",
      a: ["Leave it on the heated counter", "Place it in the chiller fridge overnight (12-24 hours) in its original packaging", "Put it in the oven at 50°C", "Soak the box in warm water"],
      c: 1
    },
    {
      q: "Which of these is NOT a step in the daily closing food safety check?",
      a: ["Recording final fridge temperatures", "Discarding expired food and logging waste", "Cleaning and sanitizing all food contact surfaces", "Counting the cash drawer money"],
      c: 3
    }
  ],
  "Week 4": [
    {
      q: "What is the maximum legal temperature for a chilled under-counter food display fridge?",
      a: ["4°C / 39°F", "8°C / 46°F", "10°C / 50°F", "12°C / 54°F"],
      c: 1
    },
    {
      q: "What is the recommended target operating temperature for our chilled food display fridges?",
      a: ["0°C to 2°C", "1°C to 5°C", "5°C to 8°C", "8°C to 12°C"],
      c: 1
    },
    {
      q: "How often must you record the temperatures of all fridges and freezers on the daily food safety log?",
      a: ["Once a day", "Twice a day (minimum)", "Three times a day", "Every hour"],
      c: 2
    },
    {
      q: "What is the minimum temperature that hot-holding food (like toasties or paninis) must reach when heated?",
      a: ["63°C / 145°F", "70°C / 158°F", "75°C / 167°F", "82°C / 180°F"],
      c: 2
    },
    {
      q: "Once heated and placed in a hot-holding unit, food must be kept at or above:",
      a: ["55°C / 131°F", "60°C / 140°F", "63°C / 145°F", "70°C / 158°F"],
      c: 2
    },
    {
      q: "If hot-held food drops below 63°C, it must be discarded after a maximum of:",
      a: ["30 minutes", "1 hour", "2 hours", "4 hours"],
      c: 2
    },
    {
      q: "Which color-coded chopping board must be used for slicing fresh tomatoes or lettuce?",
      a: ["Yellow", "Red", "Green", "White"],
      c: 2
    },
    {
      q: "Which color-coded chopping board is designated for slicing bakery items or bread?",
      a: ["White", "Yellow", "Brown", "Blue"],
      c: 0
    },
    {
      q: "To prevent cross-contamination, you must wash and sanitize your hands for at least:",
      a: ["5 seconds", "10 seconds", "20 seconds", "1 minute"],
      c: 2
    },
    {
      q: "Which of these is NOT an acceptable reason to wash your hands immediately?",
      a: ["After clearing dirty tables", "After touching your hair or face", "After taking a clean cup from the shelf", "After handling cash or the POS screen"],
      c: 2
    },
    {
      q: "What is the correct procedure if a customer states they have a severe peanut allergy?",
      a: ["Assure them we use separate jugs", "Politely explain we cannot guarantee an allergen-free environment due to open bar operations", "Suggest they try a gluten-free item instead", "Wipe down the steam wand with a clean blue roll and make the drink"],
      c: 1
    },
    {
      q: "How must alternative milks (Oat, Coconut, Soya, Almond) be stored in the fridge?",
      a: ["Mixed with dairy milks on any shelf", "On a shelf below dairy milks to prevent drips", "Clearly separated, ideally on a dedicated shelf/section", "In the freezer"],
      c: 2
    },
    {
      q: "What is the standard procedure for cleaning a steam wand after steaming an alternative milk?",
      a: ["Purge and wipe with the general dairy milk cloth", "Wipe with a designated, color-coded allergen cloth, then purge", "Wipe with a dry blue roll only", "No special action is needed if we purge it"],
      c: 1
    },
    {
      q: "When a customer requests an allergen information booklet, where should you find it?",
      a: ["Look it up on your personal phone", "Direct them to the printed Allergen Guide kept at the till point", "Guess based on the ingredient label", "Tell them we don't keep one in store"],
      c: 1
    },
    {
      q: "What color cloth is typically designated for cleaning steam wands used for dairy milk?",
      a: ["Red", "Blue", "Yellow", "Green"],
      c: 2
    },
    {
      q: "What color cloth is typically designated for general front-counter sanitizing?",
      a: ["Red", "Blue", "Yellow", "Green"],
      c: 1
    },
    {
      q: "How often should sanitizing cloth buckets be changed to ensure the chemical remains effective?",
      a: ["Once a shift", "Every 2 hours", "Every 4 hours", "Only when the water looks dirty"],
      c: 1
    },
    {
      q: "What chemical is used to clean and backflush the group heads on our espresso machines?",
      a: ["General dish soap", "Puly Caff / Espresso machine cleaning powder", "Bleach", "Sanitizer spray"],
      c: 1
    },
    {
      q: "During the nightly backflushing process, how long should the cleaning cycle run?",
      a: ["5 seconds", "5 cycles of 10 seconds on / 10 seconds off", "1 continuous minute", "10 minutes"],
      c: 1
    },
    {
      q: "What must you do to the group heads immediately after backflushing with cleaning chemical?",
      a: ["Wipe with a cloth and start making coffee", "Perform a thorough rinse cycle with clean water to remove chemical residue", "Turn off the machine immediately", "Leave the group handles out overnight"],
      c: 1
    },
    {
      q: "Which cleaning tool should be used to scrub the gaskets inside the group heads daily?",
      a: ["A metal scraper", "A group head brush", "A standard green scouring pad", "A butter knife"],
      c: 1
    },
    {
      q: "The steam wand tip should be removed and soaked in what solution during the deep weekly clean?",
      a: ["Pure bleach", "Hot water and Puly Milk / steam wand cleaner", "Cold soapy water", "Ice water"],
      c: 1
    },
    {
      q: "How often should the ice machine be fully emptied, cleaned, and sanitized?",
      a: ["Daily", "Weekly", "Monthly", "Quarterly"],
      c: 2
    },
    {
      q: "If you notice a pest (like a cockroach or mouse) in the store, what is the immediate action?",
      a: ["Try to catch it yourself", "Ignore it unless a customer sees it", "Report it immediately to the Store Manager and log it for pest control", "Spray chemical insecticide near the food displays"],
      c: 2
    },
    {
      q: "Where should pest control bait stations be located in the store?",
      a: ["On food preparation counters", "Under counters and near exit points, as mapped by the contractor", "Inside the display fridges", "In the staff locker room only"],
      c: 1
    },
    {
      q: "What is the correct storage method for cleaning chemicals (like sanitizer and bleach)?",
      a: ["On the bottom shelf of the dry food store", "In a designated chemical cupboard away from any food storage", "Under the espresso machine next to the milk", "In the back-of-house sink"],
      c: 1
    },
    {
      q: "True or False: You can store personal food or drinks in the store's food display or backup fridges.",
      a: ["True", "False"],
      c: 1
    },
    {
      q: "What is the maximum holding time for pre-prepped sandwich items once removed from their original sealed packaging?",
      a: ["12 hours", "24 hours", "48 hours", "72 hours"],
      c: 1
    },
    {
      q: "When must the bakery display cases (containing cookies, muffins, and croissants) be cleaned?",
      a: ["Once a week", "Daily, at the end of the night", "Only when crumbs are visible", "Every 2 hours"],
      c: 1
    },
    {
      q: "If you cut your finger while working on the bar, what must you apply before returning to work?",
      a: ["A standard skin-colored plaster", "A bright blue, waterproof plaster", "A piece of paper towel and tape", "Nothing, just wash your hands"],
      c: 1
    },
    {
      q: "Why are blue plasters used in food preparation environments?",
      a: ["They heal cuts faster", "They are highly visible and contain a metal strip detectable by food manufacturing scanners", "They match the Costa brand colors", "They are cheaper to purchase"],
      c: 1
    },
    {
      q: "What jewelry is a barista permitted to wear while working on the bar?",
      a: ["A watch and a wedding band", "A plain wedding band (no stones) only", "Any rings, as long as they wear gloves", "Earrings and necklaces are fine, but no rings"],
      c: 1
    },
    {
      q: "How must hair be kept if it is longer than shoulder-length?",
      a: ["Left down as long as it is clean", "Tied back securely and/or kept under a hairnet/cap", "Tucked into the collar of the polo shirt", "Sprayed with hairspray"],
      c: 1
    },
    {
      q: "What is the 'Danger Zone' temperature range where bacteria multiply most rapidly?",
      a: ["-18°C to 0°C", "0°C to 4°C", "5°C to 63°C", "64°C to 100°C"],
      c: 2
    },
    {
      q: "How long can high-risk food safely remain in the 'Danger Zone' before it must be discarded?",
      a: ["30 minutes", "1 hour", "2 hours", "4 hours"],
      c: 2
    },
    {
      q: "When receiving a delivery of frozen pastries, what temperature should the delivery vehicle's freezer be?",
      a: ["0°C or below", "-12°C or below", "-18°C or below", "-25°C or below"],
      c: 2
    },
    {
      q: "What does the abbreviation 'FIFO' stand for in inventory rotation?",
      a: ["First In, Fast Out", "First In, First Out", "Fast Ice, Fresh Only", "Food Inspection, Food Order"],
      c: 1
    },
    {
      q: "What color mop head must be used to clean the customer toilets?",
      a: ["Red", "Blue", "Green", "Yellow"],
      c: 0
    },
    {
      q: "What color mop head must be used to clean the kitchen / back-of-house area?",
      a: ["Red", "Blue", "Green", "Yellow"],
      c: 3
    },
    {
      q: "What color mop head must be used to clean the front-of-house seating area?",
      a: ["Red", "Blue", "Green", "Yellow"],
      c: 1
    },
    {
      q: "How often should the barista hand wash sink be sanitized?",
      a: ["Daily", "At the start and end of every shift", "Every 2 hours", "Weekly"],
      c: 1
    },
    {
      q: "True or False: It is acceptable to rinse a cleaning cloth in the hand wash sink.",
      a: ["True", "False"],
      c: 1
    },
    {
      q: "What items must always be available at a designated hand wash sink?",
      a: ["Hot water, cold water, hand soap, and paper towels", "Hot water, sanitizer spray, and a cloth", "Cold water and a clean towel", "Soap and sanitizer only"],
      c: 0
    },
    {
      q: "Which of these symptoms must be reported to the manager before starting a shift?",
      a: ["A mild headache", "Vomiting or diarrhea within the last 48 hours", "Muscle soreness from the gym", "Slight fatigue"],
      c: 1
    },
    {
      q: "How long must a barista be free of vomiting and diarrhea symptoms before they can return to work?",
      a: ["12 hours", "24 hours", "48 hours", "72 hours"],
      c: 2
    },
    {
      q: "What is the primary purpose of 'day dotting' prep containers?",
      a: ["To keep track of stock levels", "To ensure food is used or discarded within its safe shelf life", "To label the price of the food", "To help with inventory audits"],
      c: 1
    },
    {
      q: "When applying a day dot to a freshly prepped container, what information must be written on it?",
      a: ["The price and weight", "The name of the item, prep date, prep time, initials, and discard date/time", "The name of the item and supplier", "Your initials only"],
      c: 1
    },
    {
      q: "Which of the following is considered a physical hazard in food safety?",
      a: ["Salmonella bacteria", "Traces of cleaning chemical on a cup", "A piece of broken glass or hair in a drink", "Peanut residue on a steam wand"],
      c: 2
    },
    {
      q: "Which of the following is considered a chemical hazard in food safety?",
      a: ["A fly inside the pastry display", "Puly Caff powder residue left inside a group head", "Using dairy milk instead of oat milk", "A piece of plastic from a milk carton lid"],
      c: 1
    },
    {
      q: "What is the correct storage method for clean, sanitized cups and glasses on the bar shelves?",
      a: ["Stored upright to catch dust", "Stored upside down on a clean surface or wire shelf", "Stacked as high as possible to save space", "Wrapped in cling film"],
      c: 1
    }
  ],
  "Week 5": [
    {
      q: "What is the primary way to welcome a customer when they approach the till?",
      a: ["A polite nod", "A warm smile and a friendly verbal greeting", "Asking for their payment immediately", "Waiting for them to speak first"],
      c: 1
    },
    {
      q: "If a customer is undecided on what to order, what is the best approach?",
      a: ["Wait silently", "Suggest a popular drink or ask what kind of flavors they usually prefer", "Tell them to step aside", "Recommend the most expensive drink immediately"],
      c: 1
    },
    {
      q: "When upselling Arwa 500ml water, what is the best verbal prompt?",
      a: ["Do you want water?", "Would you like a refreshing Arwa 500ml water to go with your coffee today?", "We have water if you are thirsty", "You should buy water"],
      c: 1
    },
    {
      q: "What is a successful strategy to encourage customers to upgrade to a Large size?",
      a: ["Tell them Medium is too small", "Explain that for just a small price difference, they get a significantly larger beverage", "Automatically input a Large on the screen", "Ask 'Are you sure?' when they order a Medium"],
      c: 1
    },
    {
      q: "When a customer buys a hot beverage, which of these is the most effective companion-selling suggestion?",
      a: ["An iced beverage", "A freshly baked croissant, muffin, or cookie", "A bag of coffee beans", "A reusable cup"],
      c: 1
    },
    {
      q: "If a customer orders a Flat White, what upselling suggestion should you avoid?",
      a: ["Offering an extra shot", "Suggesting a bakery item", "Asking if they'd like a bottle of water", "Offering alternative milks"],
      c: 0
    },
    {
      q: "What is the proper action if a customer complains that their coffee is too cold?",
      a: ["Tell them it is the correct temperature", "Apologize immediately, discard the drink, and prepare a fresh, hot replacement", "Put the cup in the microwave", "Pour hot water into their cup"],
      c: 1
    },
    {
      q: "When handling a long queue of customers, what should the cashier do?",
      a: ["Rush through payments without talking", "Acknowledge waiting customers with a smile/nod and say 'Thank you for your patience, I'll be right with you'", "Ignore the crowd and focus only on the screen", "Call out for someone else to deal with it"],
      c: 1
    },
    {
      q: "What does G.E.S.T. stand for in our customer service recovery framework?",
      a: ["Greet, Empathize, Solve, Thank", "Go, Eat, Sleep, Talk", "Greet, Explain, Suggest, Terminate", "Give, Earn, Serve, Treat"],
      c: 0
    },
    {
      q: "If a discount voucher is expired, how should you communicate this to the customer?",
      a: ["Tell them they missed the date and can't use it", "Politely explain that the voucher has expired, but offer to assist them with other active promotions", "Swipe it anyway to see if it works", "Call a manager to bypass the dates"],
      c: 1
    },
    {
      q: "Why is it important to repeat the order back to the customer before finalizing payment on the POS?",
      a: ["To show off your memory", "To ensure absolute order accuracy and prevent waste from incorrect preparation", "To stall for time", "Because the system requires it"],
      c: 1
    },
    {
      q: "What is the correct procedure for processing a refund on the POS?",
      a: ["Just hand cash out of the drawer", "Call a Team Leader or Store Manager to authorize and process the refund", "Delete the item and close the transaction", "Tell the customer we do not offer refunds"],
      c: 1
    },
    {
      q: "If a transaction fails but the customer's card was charged, what should you do?",
      a: ["Tell them to contact their bank and let them leave with the items", "Politely explain the POS shows the transaction failed, call a manager to check the system, and assist", "Force them to pay cash instead", "Confiscate the card"],
      c: 1
    },
    {
      q: "When logging into the POS at the start of your shift, you must:",
      a: ["Use your colleague's PIN if yours isn't working", "Always use your own unique login details/card and never share your password", "Ask the manager to log in for you permanently", "Keep the screen logged in all day"],
      c: 1
    },
    {
      q: "Why is cash skimming (dropping excess cash to the safe) performed mid-shift?",
      a: ["To count how much tip you have made", "To minimize security risks by reducing the amount of cash kept in the drawer", "To check if the till is balanced", "To make space for more change"],
      c: 1
    },
    {
      q: "What should you do if you suspect a customer has handed you a counterfeit banknote?",
      a: ["Accept it anyway to avoid conflict", "Politely decline the note, asking for another payment method, and immediately inform your manager", "Take the note and rip it up", "Call the police directly from the till"],
      c: 1
    },
    {
      q: "At the end of your shift, who is responsible for counting and locking your till drawer?",
      a: ["The barista who takes over from you", "You and the Store Manager/Shift Supervisor together", "The kitchen porter", "The security guard"],
      c: 1
    },
    {
      q: "When scanning a digital loyalty card from a customer's phone, when should it be scanned?",
      a: ["After the receipt prints out", "Before finalizing and taking payment", "After the customer drinks their coffee", "Only when they buy a pastry"],
      c: 1
    },
    {
      q: "What should you do if a customer asks for a customized drink that is not on the standard menu?",
      a: ["Refuse the order", "Assess if we have the ingredients, ring it up with appropriate custom modifiers, and communicate clearly with the bar", "Make it for free on the side", "Tell them to order somewhere else"],
      c: 1
    },
    {
      q: "When a customer brings their own reusable clean cup, what discount or incentive do we offer?",
      a: ["A free pastry", "The standard reusable cup discount applied on the POS", "A free upgrade to a Large size", "No discount is offered"],
      c: 1
    },
    {
      q: "If a customer asks for 'extra hot' milk, how do we key this on the POS?",
      a: ["We don't; we just tell the barista verbally", "Select the 'Extra Hot' modifier button so it prints on the bar ticket", "Charge them an extra fee", "Tell them we cannot customize temperature"],
      c: 1
    },
    {
      q: "True or False: We should ask every customer if they are dining in or taking away to ensure the correct tax/packaging is applied.",
      a: ["True", "False"],
      c: 0
    },
    {
      q: "What is the correct procedure when a customer leaves personal property (like a phone or wallet) at the table?",
      a: ["Keep it at the till in case they return, and log it immediately in the lost-and-found book with your manager", "Take it home for safekeeping", "Leave it where it is", "Give it to the next customer who asks"],
      c: 0
    },
    {
      q: "If a customer asks for nutritional information (such as calories) for a drink, what should you do?",
      a: ["Make up a low number", "Refer them to the nutritional information table on the menu boards or in the store guide", "Tell them we do not keep track of calories", "Suggest they look it up on the internet themselves"],
      c: 1
    },
    {
      q: "How should we handle a phone order or home-delivery order tablet alert while serving a physical customer?",
      a: ["Focus on the tablet first", "Prioritize the physical customer in front of you, then manage the digital orders during a brief pause", "Ignore the tablet entirely", "Ask the physical customer to wait while you input the tablet order"],
      c: 1
    },
    {
      q: "If the POS system crashes completely mid-shift, what is the immediate step?",
      a: ["Close the store", "Inform your manager immediately, and switch to offline/manual processing procedures as instructed", "Give drinks away for free", "Write receipts by hand using a calculator without reporting it"],
      c: 1
    },
    {
      q: "What should you do if a customer wants to pay with a high-denomination banknote for a very cheap item?",
      a: ["Refuse the sale outright", "Politely check if they have a smaller note or a card first, and check your till drawer for adequate change before accepting", "Accept it and give them back any random coins", "Tell them to go buy change elsewhere"],
      c: 1
    },
    {
      q: "Why must we never leave the cash drawer open when we are not actively handling money?",
      a: ["To keep the bills from blowing away", "To prevent unauthorized access, theft, and maintain physical security", "Because the POS system will lock up", "To save battery power"],
      c: 1
    },
    {
      q: "What is the best way to present the final receipt to a customer?",
      a: ["Throw it on the counter", "Hand it directly to them with a polite close like 'Thank you, your drink will be ready at the pick-up point!'", "Crumple it up and throw it away unless they ask", "Leave it sticking out of the printer"],
      c: 1
    },
    {
      q: "When a customer requests an invoice with a specific tax registration number (TRN), you should:",
      a: ["Hand-write it on a napkin", "Use the 'Tax Invoice' function on the POS to input the TRN before printing", "Tell them we cannot do that", "Give them the company's head office phone number"],
      c: 1
    },
    {
      q: "If you notice a mistake on a customer's order *after* they have paid but *before* the drink is made, what should you do?",
      a: ["Do nothing and let them take the wrong drink", "Inform the barista on the bar immediately to correct the drink, and adjust the transaction on the POS with manager help if needed", "Wait for the customer to notice and complain", "Refund the whole order and make them stand in line again"],
      c: 1
    },
    {
      q: "When a customer asks for extra napkins or sugars, you should:",
      a: ["Hand them a massive stack to get rid of them", "Hand them a reasonable amount politely with a smile", "Point to the condiment stand and tell them to get it themselves", "Charge them extra"],
      c: 1
    },
    {
      q: "Which of these practices contributes most to building a regular customer base?",
      a: ["Working as fast as possible without talking", "Remembering their names and favorite drink preferences over time", "Giving them free items without permission", "Suggesting they buy merchandise every visit"],
      c: 1
    },
    {
      q: "What should you do if a customer is speaking loudly on their phone while trying to order?",
      a: ["Shout over them to get their order", "Maintain a polite, patient posture, make eye contact, and wait for them to pause or signal their order", "Refuse to serve them until they hang up", "Skip them and serve the next customer in line"],
      c: 1
    },
    {
      q: "If a customer requests tap water, how should we handle it?",
      a: ["Refuse and tell them they must buy bottled water", "Provide it politely in a clean cup with ice, according to local store and health policies", "Charge them the same price as bottled water", "Tell them our tap water is unsafe"],
      c: 1
    },
    {
      q: "When introducing a seasonal drink promotion, how should you explain it to the customer?",
      a: ["'We are forced to sell this today'", "'Would you like to try our new seasonal special, the [Drink Name]? It features [brief flavor description]!'", "'It is on the menu if you want it'", "'It's expensive but good'"],
      c: 1
    },
    {
      q: "If a customer displays aggressive or highly abusive behavior toward you, what is the correct response?",
      a: ["Argue back to defend yourself", "Remain calm, do not engage in argument, and immediately call the Store Manager or Shift Supervisor to handle the situation", "Walk out of the store", "Shout for security to throw them out immediately"],
      c: 1
    },
    {
      q: "When executing suggestive selling, how many items should you suggest at maximum?",
      a: ["One companion item (such as a cookie with coffee) to avoid overwhelming them", "Three or four different things", "As many items as possible", "None, unless they ask"],
      c: 0
    },
    {
      q: "What is the proper way to handle a customer who wants to use two different payment methods (e.g., partial cash and partial card)?",
      a: ["Tell them we only accept one payment method per transaction", "Process a 'Split Payment' on the POS, entering the exact cash amount first, then charging the remainder to the card", "Perform two separate transactions for the same order", "Request they go get more cash"],
      c: 1
    },
    {
      q: "True or False: If a customer asks for a receipt after the transaction has been closed, we can print a duplicate receipt from the POS history.",
      a: ["True", "False"],
      c: 0
    },
    {
      q: "Why should you avoid touching the rim of clean cups when preparing to serve them?",
      a: ["It can crack the cup", "It leaves fingerprints and transfers bacteria to the area where the customer drinks", "It makes the coffee go cold faster", "There is no reason to avoid this"],
      c: 1
    },
    {
      q: "How do you handle a customer who claims they were charged twice for their order?",
      a: ["Tell them it is impossible", "Apologize for the concern, check the transaction history on the POS, and call the manager to review the receipts and banks", "Give them cash back immediately without checking", "Tell them to come back tomorrow"],
      c: 1
    },
    {
      q: "When a customer requests a tray for their drinks, you should:",
      a: ["Provide a drink carrier tray politely and ensure the cups are balanced securely", "Point to where they are and let them grab it", "Tell them we only have them for delivery orders", "Charge them a packaging fee"],
      c: 0
    },
    {
      q: "What is the best way to handle feedback or a constructive suggestion from a customer about store layout?",
      a: ["Ignore it", "Listen politely, thank them for their feedback, and pass it on to your Store Manager", "Argue with them about why the layout is correct", "Tell them to write an email to head office instead"],
      c: 1
    },
    {
      q: "Why must we verify the physical appearance of card payments when a signature is required?",
      a: ["To check the design on the card", "To ensure card security standards are met and prevent unauthorized card usage", "Because the bank charges less fees", "It is just a habit"],
      c: 1
    },
    {
      q: "If a customer asks if our food products are Halal-certified, you should:",
      a: ["Guess that they are", "Confirm based on store certification guidelines and the official Halal certificates display or store policy documentation", "Tell them we don't know", "Laugh off the question"],
      c: 1
    },
    {
      q: "When presenting change to a customer, what is the best technique?",
      a: ["Count the notes back to them first, then place the coins in their hand (or on the counter if preferred) with the receipt", "Drop the coins and notes together rapidly", "Slide the money across the counter without saying anything", "Tell them to count it themselves"],
      c: 0
    },
    {
      q: "What is the standard greeting on our Drive-Thru headsets?",
      a: ["'What do you want to buy today?'", "'Welcome to Costa Drive Thru, my name is [Name], how can I make your day sweeter today?'", "'Drive up to the window to order'", "'Hello, order when you are ready'"],
      c: 1
    },
    {
      q: "At the end of a transaction, what is the ideal farewell?",
      a: ["'Bye'", "'Have a wonderful day, and thank you for choosing Costa!'", "'Next customer please'", "Silence with a wave"],
      c: 1
    },
    {
      q: "True or False: A smile can be 'heard' over a Drive-Thru headset or telephone call.",
      a: ["True", "False"],
      c: 0
    }
  ],
  "Week 6": [
    {
      q: "What is the primary cause of espresso pouring unevenly from the double spouts of a group handle?",
      a: ["An uneven tamp or unlevel coffee bed", "The machine is not level on the counter", "The water pressure is too high", "One cup is colder than the other"],
      c: 0
    },
    {
      q: "How often should the drip tray under the group heads be removed and thoroughly washed?",
      a: ["Once a week", "Daily, during the close-down procedure", "Only when it overflows", "Every 2 hours"],
      c: 1
    },
    {
      q: "If the espresso machine's steam pressure drops significantly during a peak rush, what should you do first?",
      a: ["Keep steaming anyway", "Pause extraction, check if the boiler pressure gauge is in the green zone, and notify maintenance if it remains low", "Pour hot water over the steam arm", "Turn off the machine immediately"],
      c: 1
    },
    {
      q: "What should you do if the grinder starts making a high-pitched, screeching noise and stops dispensing coffee?",
      a: ["Keep pressing the button", "Turn it off immediately, close the hopper gate, check for foreign objects (like stones), and inform your manager", "Pour water into the grinder chute to clear it", "Hit the side of the grinder"],
      c: 1
    },
    {
      q: "How often should the bean hopper be removed and washed with warm, soapy water to remove coffee oil buildup?",
      a: ["Daily", "At least once a week", "Once a month", "Only when switching bean types"],
      c: 1
    },
    {
      q: "True or False: We can use a metal scourer to clean the inside of the bean hopper.",
      a: ["True", "False"],
      c: 1
    },
    {
      q: "If the water filter warning light on the machine starts flashing, what does this indicate?",
      a: ["The machine is about to break", "The water filter cartridge has reached capacity and needs to be replaced by maintenance soon", "The water supply has been cut off", "The coffee beans are too damp"],
      c: 1
    },
    {
      q: "How do you clear a blocked steam wand tip during service?",
      a: ["Use a paperclip or a designated steam wand cleaning tool to gently clear the holes, then purge", "Blow into the steam arm", "Use a knife to pry the tip off", "Leave it until the weekly deep clean"],
      c: 0
    },
    {
      q: "What is the correct way to handle coffee grounds waste (pucks) from the knock box?",
      a: ["Empty them into the hand wash sink", "Empty them into a designated waste bin lined with a heavy-duty bag, and recycle if your store has a grounds-to-compost scheme", "Keep them in the knock box until the end of the week", "Flush them down the toilet"],
      c: 1
    },
    {
      q: "Why is it important to empty the knock box before it gets completely full?",
      a: ["To avoid making a loud noise when knocking", "To prevent physical contamination of the bar and damage to the knock bar itself", "Because coffee grounds will lose their smell", "To keep the trash weight low"],
      c: 1
    },
    {
      q: "If you notice a water leak pooling underneath the espresso machine, what is your first action?",
      a: ["Ignore it and put down a towel", "Locate the source if safe, switch off the machine if it is an electrical hazard, and report it immediately to your manager/maintenance", "Mop the floor and keep working", "Pour coffee grounds over the leak to absorb it"],
      c: 1
    },
    {
      q: "How should you clean the external stainless steel panels of the espresso machine?",
      a: ["Use an abrasive metal polish and a wire brush", "Wipe down with a damp, clean microfiber cloth and dry with a soft cloth (or use approved stainless steel spray on non-food contact areas)", "Spray it with heavy-duty oven cleaner", "Wash it with a hose"],
      c: 1
    },
    {
      q: "What is the risk of leaving the espresso machine on with the water supply valve turned off?",
      a: ["It will run out of coffee beans", "It can burn out the heating elements and severely damage the water pump", "It will make the espresso taste sweeter", "It has no risk at all"],
      c: 1
    },
    {
      q: "If a Merrychef oven displays an error code and refuses to heat up, what should you do?",
      a: ["Keep slamming the door", "Unplug it, wait 30 seconds to reset, and if the error persists, log a maintenance call and do not use it", "Use a lighter to heat up the inside", "Try to open the side panels with a screwdriver"],
      c: 1
    },
    {
      q: "How often must the Merrychef oven filters be removed and cleaned?",
      a: ["Daily", "Weekly", "Monthly", "Only when the machine stops working"],
      c: 0
    },
    {
      q: "What chemical is used to protect the internal chamber of the Merrychef oven after cleaning?",
      a: ["Standard sanitizer", "Merrychef Oven Protector spray", "Bleach", "Cooking oil"],
      c: 1
    },
    {
      q: "Why must you never use metal utensils inside a Merrychef oven?",
      a: ["It ruins the taste of the food", "It can damage the internal non-stick liners and cause dangerous microwave arcing/sparks", "It makes too much noise", "The utensils will melt"],
      c: 1
    },
    {
      q: "If the ice machine is not producing ice, what is the first basic troubleshooting step you should take?",
      a: ["Check if the water supply is turned on and if the storage bin sensor is blocked by piled-up ice", "Pour hot water into the ice bin", "Hit the side of the machine with an ice scoop", "Unplug it and leave it off for the rest of the day"],
      c: 0
    },
    {
      q: "Why is it critical to use plastic or rubber scoops inside the ice machine bin instead of glass cups?",
      a: ["Glass cups are too heavy", "Glass can easily chip or shatter in the ice, creating an invisible and extremely dangerous physical hazard", "Plastic scoops hold more ice", "Glass warms up the ice too quickly"],
      c: 1
    },
    {
      q: "How often should the under-counter fridge door gaskets (seals) be wiped down and checked for damage?",
      a: ["Daily", "Weekly", "Monthly", "Every six months"],
      c: 0
    },
    {
      q: "If a fridge door does not close tightly because of a split gasket, what is the impact?",
      a: ["Cold air escapes, the compressor overworks, and food temperatures may rise into the Danger Zone", "The fridge will make a whistling noise but remain perfectly cold", "It saves electricity", "It helps ventilate the fridge"],
      c: 0
    },
    {
      q: "What is the correct procedure for managing daily food waste recording?",
      a: ["Throw everything away immediately and guess the amounts at the end of the week", "Log every wasted item (including expired food, burnt toasties, and spilled drinks) on the POS or waste sheet before discarding", "Only log items that cost more than 10 AED", "Hide the waste so the manager doesn't see it"],
      c: 1
    },
    {
      q: "Which of these practices is the most effective way to reduce milk waste on the bar?",
      a: ["Underfill the cups", "Pour and steam only the exact amount of milk needed for the specific drink size using the jug lines", "Save leftover steamed milk in the jug and reheat it later", "Use water to dilute the milk"],
      c: 1
    },
    {
      q: "How does proper grind calibration reduce coffee bean waste?",
      a: ["It prevents pulling bad espresso shots that have to be thrown away", "It makes the beans last forever", "It uses less coffee per cup than standard", "It speeds up the grinder motor"],
      c: 0
    },
    {
      q: "When logging retail/packaged merchandise waste, what must be checked on the item?",
      a: ["The color of the packaging", "The barcode and the Best Before / Expiry Date", "The price tag only", "How heavy the item is"],
      c: 1
    },
    {
      q: "What is the holding time for freshly whipped cream inside a dispenser before it must be washed and recharged?",
      a: ["12 hours", "24 hours", "48 hours (if kept refrigerated between uses)", "7 days"],
      c: 2
    },
    {
      q: "If the water flow from a group head is dripping or extremely slow even with no portafilter attached, what is the likely cause?",
      a: ["The water filter is full", "The shower screen inside the group head is heavily clogged with coffee oils and needs cleaning", "The steam boiler is too hot", "The main water pump is turned off"],
      c: 1
    },
    {
      q: "What should you do with the group handles at the end of the nightly clean?",
      a: ["Leave them locked tightly in the group heads overnight", "Store them clean and dry on the drip tray, or leave them loosely engaged in the group heads to keep gaskets in place", "Soak the entire handle (including plastic grips) in chemical water overnight", "Put them in the freezer"],
      c: 1
    },
    {
      q: "Why must we never soak the plastic/rubber handles of the portafilters in chemical cleaning solution?",
      a: ["It makes them too shiny", "The chemical will degrade, crack, and damage the plastic/rubber material over time", "It changes the weight of the handle", "It makes them smell like coffee"],
      c: 1
    },
    {
      q: "What is the standard procedure if a water pipe under the bar bursts?",
      a: ["Mop up the water while it keeps leaking", "Immediately locate and turn off the main water isolation valve, switch off nearby electrical equipment, and notify management", "Call the fire department", "Wrap tape around the pipe without turning off the water"],
      c: 1
    },
    {
      q: "How often should the syrup bottle pumps be dismantled and washed with hot water to prevent crystallization?",
      a: ["Daily", "Weekly", "Monthly", "Only when they get completely stuck"],
      c: 1
    },
    {
      q: "If a delivery of milk arrives with a temperature of 10°C (50°F), what should you do?",
      a: ["Accept it and put it in the freezer to cool down quickly", "Reject the delivery because it is in the Danger Zone and log the issue immediately", "Accept it and use it for hot drinks only", "Leave it on the counter for a few hours"],
      c: 1
    },
    {
      q: "What is the maximum stacking height for milk crates in the walk-in cold room to prevent tipping hazards?",
      a: ["3 crates high", "5 crates high", "6 crates high", "There is no limit"],
      c: 2
    },
    {
      q: "Why must we never store food items or milk crates directly on the floor of the walk-in fridge?",
      a: ["It makes the floor look dirty", "To prevent contamination, allow proper air circulation, and comply with food safety laws", "It makes it hard to sweep the floor", "It keeps the food too cold"],
      c: 1
    },
    {
      q: "If the automatic dishwasher / cup washer is not sanitizing properly, what should you check first?",
      a: ["If the chemical intake tubes are empty and if the temperature gauge reaches the required wash/rinse targets", "The color of the cups", "The brand of dishwasher", "If the water is cold"],
      c: 0
    },
    {
      q: "What is the minimum rinse temperature for a commercial cup washer to ensure effective heat sanitization?",
      a: ["50°C", "60°C", "82°C / 180°F", "100°C"],
      c: 2
    },
    {
      q: "How often should the waste water drain lines under the espresso machine be flushed with hot water and drain cleaner?",
      a: ["Daily", "Weekly", "Monthly", "Every six months"],
      c: 1
    },
    {
      q: "What happens if coffee oils and milk residue are allowed to build up in the bar drains?",
      a: ["The water will flow faster", "It causes foul odors, slow draining, blockages, and attracts pests like fruit flies", "It sanitizes the pipes naturally", "It has no negative effects"],
      c: 1
    },
    {
      q: "True or False: We can use the steam wand of the espresso machine to heat up water in a cup for cleaning purposes.",
      a: ["True", "False"],
      c: 1
    },
    {
      q: "If you find a cracked cup or glass while working on the bar, what must you do with it?",
      a: ["Use it only for takeaway drinks", "Discard it immediately in the designated glass waste bin to prevent physical injury or contamination", "Keep using it until it breaks completely", "Put tape over the crack"],
      c: 1
    },
    {
      q: "How should you safely clean up broken glass near the bar area?",
      a: ["Pick up the pieces with your bare hands", "Use a dustpan and broom (or brush), place the broken glass in a labeled, puncture-proof container, and sanitize the area", "Vacuum it up with a domestic vacuum cleaner", "Sweep it under the counter"],
      c: 1
    },
    {
      q: "What is the correct procedure if the main power goes out in the store mid-shift?",
      a: ["Keep serving drinks using a flashlight", "Ensure customer safety, keep fridge doors closed to maintain cold temperatures, inform your manager, and contact the utility provider", "Go home immediately", "Open all the fridges to let them air out"],
      c: 1
    },
    {
      q: "Why must the crumb tray of the panini press/toaster be emptied daily?",
      a: ["To keep the machine light", "To prevent fire hazards from charred crumbs and eliminate food sources for pests", "To improve the toaster's electrical power", "Because the crumbs will ruin the next panini"],
      c: 1
    },
    {
      q: "When cleaning the panini press, what type of tool should be used to scrape the plates?",
      a: ["A sharp metal knife", "The approved grill scraper or brass wire brush designed specifically for grill cleaning", "A standard steel wool sponge", "A plastic fork"],
      c: 1
    },
    {
      q: "What is the correct storage location for the store's SDS (Safety Data Sheets) binder?",
      a: ["Locked in the Store Manager's private office where staff cannot access it", "In a clearly marked, easily accessible location near the chemical storage area for all staff to read", "In the dry food storage room", "Under the POS cash drawer"],
      c: 1
    },
    {
      q: "If a chemical gets splashed into your eyes, what is the immediate first aid step?",
      a: ["Rub your eyes vigorously", "Flush your eyes immediately with clean, lukewarm water (using the eyewash station if available) for at least 15 minutes, and seek medical help", "Apply eye drops and wait", "Close your eyes and lie down"],
      c: 1
    },
    {
      q: "Why should you never mix different cleaning chemicals together (like bleach and ammonia)?",
      a: ["It reduces their cleaning power", "It can cause dangerous chemical reactions that release highly toxic, lethal gases", "It ruins the mop buckets", "It changes the color of the solution"],
      c: 1
    },
    {
      q: "How often should the store's grease trap under the BOH sink be inspected and cleaned?",
      a: ["Once a year", "According to the scheduled maintenance contract, typically monthly or quarterly", "Only when the sink backs up completely", "Every morning before opening"],
      c: 1
    },
    {
      q: "What is the purpose of the backflow preventer valve installed on the espresso machine's water line?",
      a: ["To control the temperature of the brewing water", "To prevent dirty machine water from flowing backward into the main public drinking water supply", "To increase water pressure in the boiler", "To filter out minerals"],
      c: 1
    },
    {
      q: "At closing time, why must the espresso machine's steam wands be purged one final time after wiping them clean?",
      a: ["To empty the boiler", "To ensure no milk residue has been sucked back inside the steam arm nozzle as it cooled down", "To warm up the bar area", "To reduce steam pressure overnight"],
      c: 1
    }
  ]
};
