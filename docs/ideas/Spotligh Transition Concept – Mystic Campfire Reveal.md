
**Scene:**

* A dark, outdoor forest clearing at night.
* Lit only by a few **braziers** (torch stands) near the **bottom of the stage**.
* Background: muted forest or grassland with subtle shadows.

**Interaction:**

* A **spotlight mask** follows the cursor.
* When the cursor hovers near a brazier, an **additional mask circle** appears, expanding outward to reveal more of the
  scene.
* As braziers are "activated," the scene slowly **fades from masked to fully visible**, serving as a segue to the next
  section/page.

**Effects:**

* **Children’s highlights** (e.g., rim light on heads) flicker in sync with braziers to simulate firelight reflections.
* **Robot hands** could shimmer subtly with the same flicker pattern, as if catching the glow.
* Optional: **full moon above**, but possibly excluded to tighten vertical focus.

**Tech Approach:**

* Use an **SVG mask** with multiple `circle` elements to create multi-spotlight effects.
* Use cursor tracking + distance checks to determine when to expand or reveal spotlights.
* CSS or D3 **flicker animations** for the brazier glow + character highlights.
