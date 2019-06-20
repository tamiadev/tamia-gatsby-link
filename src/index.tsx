import React from 'react';
import { Link as LinkBase, QuotedLink as QuotedLinkBase } from 'tamia';
import { Link as GatbsyLinkBase } from 'gatsby';

/* eslint-disable react/no-multi-comp */

type Props = JSX.IntrinsicElements['a'];

const isExternalLink = (href: string = ''): boolean => {
	const protocol = href && href.split(':').shift();
	return protocol === 'https' || protocol === 'http' || protocol === 'mailto';
};

export const GatsbyLink = LinkBase.withComponent(GatbsyLinkBase);
export const QuotedGatsbyLink = QuotedLinkBase.withComponent(GatbsyLinkBase);

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			// @ts-ignore
			<LinkBase href={href} ref={ref} {...props} />
		) : (
			// @ts-ignore
			<GatsbyLink to={href} ref={ref} {...props} />
		)
);

export const QuotedLink = React.forwardRef<HTMLAnchorElement, Props>(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			// @ts-ignore
			<QuotedLinkBase href={href} ref={ref} {...props} />
		) : (
			// @ts-ignore
			<QuotedGatsbyLink to={href} ref={ref} {...props} />
		)
);
