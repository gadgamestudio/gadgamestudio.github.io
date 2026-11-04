# Landing art notes

Hero (`assets/hero.webp`), logo (`assets/logo-mark.png`, favicons) and `assets/og.jpg` were generated with Codex built-in image_gen on 2026-11-04. Logo alpha was cleaned (specks outside the cube removed) and resized; OG = hero crop + logo + Arial Rounded Bold text. Game covers/icons are copied from each game project's marketing folder.

Codex notes below are verbatim.

---

# Landing page art — generation notes

Created with the built-in `image_gen` tool only. No external downloads, API keys, CLI generators, or programmatic image edits. The reference sheet was used for motifs and style, not cover layouts or titles.

## Delivered files

| File | Native size | Mode | Original source |
| --- | --- | --- | --- |
| hero.png | 1672 × 941 | RGB PNG | ~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-632c5819-44eb-4ba7-856b-a055c8512634.png |
| logo-mark.png | 1254 × 1254 | RGBA PNG | ~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-88db96c4-e5bf-434c-9cc7-106087d8890b.png |
| hero_alt.png | 1672 × 941 | RGB PNG | ~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-277bddb0-7153-451e-969e-78218f03e930.png |
| hero_alt2.png | 1672 × 941 | RGB PNG | ~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-cc4a1a51-a1a8-4b6d-a9bf-68ce15048726.png |

All four files were copied byte-for-byte from their generated sources, verified with SHA-256 comparisons. No resizing, cropping, re-encoding, alpha cleanup or upscaling was performed. The native hero size is the brief's acceptable 1672 × 941, approximately 16:9; it is not 4K.

## Honest visual and file checks

- **hero.png — chosen final:** all nine motifs are visible: number cubes, floral mahjong tiles, kitten/wooden house, haystack/needle, red train/curved track, sponge, rolling two-tone block/coloured board, and jumping voxel duck. No visible text, letters, titles, logos, UI, borders or watermarks. Visible cube digits are 2, 4, 8, 16 and 2048. The physical display begins at approximately x=45% and ends at x=94%; its tallest objects begin at about y=39%. The left 45% is calm dark indigo/violet, suitable for white headline copy. The image is a compact floating shelf diorama; the workshop atmosphere is conveyed through its toys, wood and lighting rather than additional room furniture.
- **logo-mark.png — chosen final:** exactly one large white G, no other text. Square coral/orange glossy cube, clear thick letter and uncluttered silhouette. Genuine RGBA transparency is confirmed: all four corner pixels have alpha 0, and 726,740 pixels are fully transparent. No visible checkerboard, backdrop or shadow plate. **Alpha is not mathematically pristine:** the generator leaves some faint residual pixels beyond the silhouette, and most interior alpha values are 253–254 rather than 255 (center alpha 253). The cleanup generation reduced the visible edge speckling, but did not eliminate it completely. The original generated alpha is preserved as requested. The broad G should read at favicon size; no separate resized favicon file was made.
- **hero_alt.png:** attractive larger diorama with all motifs and no observed text artifacts besides permitted cube digits. Its shelf extends to approximately x=39%, so it does not fully satisfy the left-45%-empty constraint; use hero.png for the specified headline layout.
- **hero_alt2.png:** richer workshop atmosphere with warm lantern, foliage and shelving; all requested motifs and no observed prohibited text. Props/shelf extend to approximately x=28%, and upper shelving occupies the top third. It is included as a visual alternative, not the recommended headline background.

## Exact prompts and generation lineage

### hero_alt2.png — initial hero variant

```text
Use case: stylized-concept.
Asset type: premium casual mobile game studio website hero background.
Generate one original image, wide 16:9, highest available native resolution, ideally 3840x2160 (1672x941 acceptable). Use the attached reference_sheet.jpg ONLY to understand the playful game motifs and bright glossy friendly casual-mobile 3D style, never its compositions or typography.
Scene: a cosy, slightly magical toy shelf / game workshop diorama at dusk. Deep indigo/navy to violet background (#14122b to #2a1f55), warm golden key light, coral/orange and teal accents. Crisp glossy stylised 3D, premium toy-like materials, high contrast, appealing at thumbnail size.
Composition is critical: every physical object is grouped entirely in the RIGHT 55% (x=45%–96%), within the LOWER TWO THIRDS of the canvas. Keep a clear 4% margin at right. The entire LEFT 45% is calm, fairly dark deep indigo/violet gradient wall with only very subtle soft bokeh, usable for a future white headline. No furniture, foreground props, or bright light patches on the left. Right group is an appealing coherent piled workshop diorama on a warm wooden shelf, not separate cover panels.
Include these recognizable miniatures together, all on the right: glossy numbered game cubes in red, orange, teal and green (digits such as 2, 4, 8, 16, 2048 are allowed); a few thick cream mahjong tiles with beautiful red and blue floral ornaments (no glyphs); a small warm wooden cat house with a cute ginger kitten peeking out; a tiny golden haystack with a visible glinting needle; a small red toy train on a curved miniature track; a yellow sponge; a two-tone rolling rectangular block tipping on a coloured tile; a small yellow voxel/pixel duck mid-jump. Use varied heights, overlap, polished rounded edges and gentle realistic contact shadows so this feels like one charming handcrafted shelf scene. A few delicate floating golden sparkles, mostly on the right.
Absolutely NO text, letters, words, titles, logos, interface, borders, watermarks, signs or labels. Only digits printed on the numbered cubes are allowed. No text area placeholder drawn into the image.
```

### hero_alt.png — second hero variant

```text
Use case: stylized-concept.
Asset type: 16:9 website hero background with large empty space for future headline.
Generate ONE original landscape image at the highest available native resolution, ideally 3840x2160 or native 1672x941. Premium glossy stylised 3D casual-mobile game art, cosy magical toy workshop at dusk. Use reference_sheet.jpg from the conversation only for game motifs and friendly glossy style; never copy cover compositions, titles or logos.

STRICT LAYOUT: Think of the canvas divided at x=45%. The entire left 45% must be EMPTY DARK INDIGO WALL, a smooth navy/violet gradient (#14122b to #2a1f55), with only a couple of extremely faint blurred bokeh dots. This empty left region must continue all the way to the bottom. No shelf, track, train, leaves, props, shadows or glowing highlights may cross into it. Every physical object including the wooden display shelf must fit in one compact miniature diorama entirely between x=48% and x=95%, y=36% and y=92%. Keep clear margins above and to the right. The top third across the entire canvas is dark empty wall. Do not zoom in. The whole image is one wide continuous scene, not a split panel; the object pile sits naturally at lower right.

Within that compact right-hand display, arrange ALL these small toy miniatures as one coherent playful grouping, with enough separation to recognize them: a small wooden cat house with a ginger kitten peeking out as the central tallest object; glossy red, orange, teal and green numbered cubes with digits 2, 4, 8, 16, 2048; three cream mahjong tiles with only red/blue floral ornaments and no writing; a tiny golden haystack with a glinting sewing needle; a small red toy train on a short curved track at the front of the display; a yellow cleaning sponge; a two-tone rolling rectangular block tipping on a small coloured tile board; a small yellow voxel duck mid-jump beside the cat house, below y=36%. Everything stays small and entirely inside the specified right-lower region. No overhead shelves, lanterns, books, windows, roof framing or extra environmental props. The small shelf is a compact floating wooden platform under the objects, wholly in the right half.
Warm golden key light on toys, subtle coral/orange and teal accents, rich soft shadows, a few restrained floating sparkles beside the pile. Crisp premium toy materials, rounded edges, charming kitten expression, appealing at small size.
ABSOLUTELY NO text, letters, words, game titles, logos, UI, frames, borders or watermarks. Only the printed DIGITS on the number cubes are permitted. No text placeholders.
```

### hero.png — final composition correction

Input/edit target: `~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-277bddb0-7153-451e-969e-78218f03e930.png`.
Tool setting: `transparent_background: false`.

```text
Use case: precise-object-edit.
Edit the supplied hero image, keeping its same 1672x941 native landscape canvas, colours, lighting, glossy 3D art style and every game miniature design. Make only this composition correction: reduce the ENTIRE wooden display platform plus ALL objects and sparkles on it as one coherent group by about 18%, anchored near the lower-right, so its complete visible bounding box fits between x=48% and x=95%, y=39% and y=93%. Do not crop anything off the group. Maintain aspect ratios and design. The leftmost edge of the wooden platform must now start to the RIGHT of the canvas midpoint at x=48%. Keep the train, floral mahjong tiles, numbered cubes, kitten in wooden house, haystack and needle, sponge, tipping two-tone block and coloured tiles, voxel duck. Every object must be wholly to the right of x=45%. Fill the space vacated by the larger group with the same seamless calm dark indigo/violet background. The left 45% and top third should be dark empty wall. Keep the right edge clear at x=95%. No extra props, new text, letters, logos, interface, borders or watermarks. Retain only the existing permitted digits on cubes.
```

### Logo — initial generation prompt

Initial source (retained under generated_images, not delivered as a separate alternate): `~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-981fac7b-d9d8-4ba4-9027-bda9adf63fdd.png`.
Tool setting: `transparent_background: true`.

```text
Use case: logo-brand.
Asset type: square transparent PNG studio logo mark / favicon.
Create one bold, simple, friendly premium casual-game studio emblem: a single glossy rounded-square game cube / die, coral-to-orange gradient, tilted slightly in an appealing three-quarter view. The large front face carries ONE thick playful clean white capital "G", exactly G, centered and very readable. Make the front face dominant, only a narrow side and top visible. Chunky clean silhouette and broad simple shapes, strong white/coral contrast, reads clearly at 32x32 pixels. Polished glossy stylised 3D with restrained soft highlights and smooth rounded corners. Centered large in the square with even generous transparent margins, no cropping.
The ONLY letter is that single white G. No other letters, text, numbers, dots, pips, symbols or logos. No extra objects. No surrounding square container separate from the cube.
Real TRANSPARENT BACKGROUND with clean alpha edges: no backdrop, no checkerboard drawn into the image, no floor, no ground plane, no shadow plate, no drop shadow outside the cube, no aura or glow. Preserve transparency around the entire cube. Highest available native square resolution.
```

### logo-mark.png — final alpha refinement prompt

Input/edit target: `~/.codex/generated_images/01a1a7d7-50dc-7f13-aa90-57d7cef9191e/exec-981fac7b-d9d8-4ba4-9027-bda9adf63fdd.png`.
Tool setting: `transparent_background: true`.

```text
Use case: precise-object-edit.
Polish this studio logo while preserving the same design, square canvas, coral-to-orange glossy rounded game cube, slight tilt, and single thick white capital G. Keep the G large and clean for favicon readability.
Correct only the cutout quality: make the cube a solid opaque object with a smooth clean silhouette and a very narrow antialiased edge. Remove ALL detached colored specks and faint residual pixels outside the cube. Outside its silhouette must be completely transparent alpha=0, including all four corners and the entire surrounding margin. Inside the cube should be fully opaque, not translucent. No external shadow, halo, glow, backdrop, floor, plate, checkerboard or extra shape. Retain the cube's existing polished highlights and simple broad forms. No added text, letters, numbers or symbols; G remains the only letter. Output a native square PNG with genuine transparent background and no resizing of the canvas.
```

