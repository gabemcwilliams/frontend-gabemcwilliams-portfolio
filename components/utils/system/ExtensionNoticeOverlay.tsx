'use client';

import {useEffect, useState} from 'react';

export default function ExtensionNoticeOverlay() {
    const [showNotice, setShowNotice] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

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
                    [
                        '[data-darkreader-inline-fill]',
                        '[data-darkreader-inline-color]',
                        '[data-darkreader-inline-bgcolor]',
                        '[data-darkreader-inline-bgimage]',
                        '[data-darkreader-inline-stroke]',
                        '[data-darkreader-inline-border]',
                    ].join(',')
                );

            const detected =
                hasDarkReaderAttrs ||
                hasDarkReaderStyles ||
                hasDarkReaderInlineMutations;

            setShowNotice(detected);
        };

        detectDarkReader();

        const observer = new MutationObserver(() => {
            window.requestAnimationFrame(detectDarkReader);
        });

        observer.observe(document.documentElement, {
            subtree: true,
            childList: true,
            attributes: true,
        });

        return () => observer.disconnect();
    }, [dismissed]);

    if (!showNotice || dismissed) return null;


return (
    <>
        <div
            className="fixed inset-0 z-[2147483646] bg-[var(--BG_NAVBAR)]"
            aria-hidden="true"
        />

        <div
            className="fixed bottom-4 left-4 z-[2147483647] max-w-md rounded-xl border border-orange-500/50 bg-[var(--BG_NAVBAR)] px-4 py-3 text-sm text-white shadow-2xl"
        >
            <div className="relative px-4 py-4 pr-10">
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="
                        absolute right-1 top-1
                        flex h-6 w-6 items-center justify-center
                        rounded-md border border-zinc-600/80
                        bg-zinc-900/90
                        text-xs font-bold text-emerald-200
                        cursor-pointer
                        hover:border-emerald-300/70 hover:bg-emerald-500/15 hover:text-white
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300
                    "
                    aria-label="Reload page"
                    title="Reload page"
                >
                    ↻
                </button>

                <div>
                    <p className="font-bold tracking-wide text-red-400">
                        DARK MODE or CSS EXTENSION DETECTED
                    </p>

                    <p className="mt-1 py-3 leading-relaxed text-zinc-200">
                        This creative portfolio site is designed to run with its original visual settings.
                    </p>

                    <p className="mt-2 rounded-md border border-emerald-400/40 bg-emerald-500/15 px-2 py-1.5 font-medium leading-relaxed text-emerald-200">
                        Please disable appearance-changing extensions for this site and reload the page.
                    </p>
                </div>
            </div>
        </div>
    </>
);

}