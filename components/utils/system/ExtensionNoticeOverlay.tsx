'use client';

import {useEffect, useState} from 'react';

export default function ExtensionNoticeOverlay() {
    const [showNotice, setShowNotice] = useState(false);

    useEffect(() => {
        const detectDarkReader = () => {
            const html = document.documentElement;

            const hasDarkReaderAttrs =
                html.hasAttribute('data-darkreader-mode') ||
                html.hasAttribute('data-darkreader-scheme');

            const hasDarkReaderStyles =
                !!document.querySelector('style.darkreader') ||
                !!document.querySelector('meta[name="darkreader"]');

            const hasDarkReaderInlineMutations =
                !!document.querySelector(
                    '[data-darkreader-inline-fill], [data-darkreader-inline-color], [data-darkreader-inline-bgcolor], [data-darkreader-inline-stroke]'
                );

            setShowNotice(
                hasDarkReaderAttrs ||
                hasDarkReaderStyles ||
                hasDarkReaderInlineMutations
            );
        };

        detectDarkReader();

        const observer = new MutationObserver(detectDarkReader);

        observer.observe(document.documentElement, {
            subtree: true,
            childList: true,
            attributes: true,
        });

        return () => observer.disconnect();
    }, []);

    if (!showNotice) return null;

    return (
        <div className="fixed bottom-4 left-4 z-[2147483647] max-w-md rounded-xl border border-orange-500/50 bg-black/90 px-4 py-3 text-sm text-white shadow-2xl">
            <p className="font-semibold text-orange-300">
                Browser extension detected
            </p>
            <p className="mt-1 leading-relaxed text-zinc-200">
                This site uses custom SVG masking and animation. A dark-mode browser
                extension appears to be modifying the page, which may affect the intended
                visual design.
            </p>
        </div>
    );
}