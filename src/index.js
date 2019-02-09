// @flow
import React from 'react';
import { Link as LinkBase, QuotedLink as QuotedLinkBase } from 'tamia';
import { Link as GatbsyLinkBase } from 'gatsby';

type Props = {
	href?: string,
};

const isExternalLink = (href: string): boolean => {
	const protocol = href && href.split(':').shift();
	return protocol === 'https' || protocol === 'http' || protocol === 'mailto';
};

export const GatsbyLink = LinkBase.withComponent(GatbsyLinkBase);
export const QuotedGatsbyLink = QuotedLinkBase.withComponent(GatbsyLinkBase);

export const Link = React.forwardRef(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			<LinkBase href={href} ref={ref} {...props} />
		) : (
			<GatsbyLink to={href} ref={ref} {...props} />
		)
);

export const QuotedLink = React.forwardRef(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			<QuotedLinkBase href={href} ref={ref} {...props} />
		) : (
			<QuotedGatsbyLink to={href} ref={ref} {...props} />
		)
);
